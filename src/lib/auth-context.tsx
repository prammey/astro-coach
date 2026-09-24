'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import { Session, User } from '@supabase/supabase-js';
import { supabase } from './auth';
import { canSwitchViews, VIEW_AS_COOKIE, viewAsFromCookieHeader, type ViewAs } from './view-as';

interface AuthContextType {
  /// The user the site should act for. In the owner's simulated "Guest"
  /// view this is null, so every page behaves as if signed out.
  user: User | null;
  /// Who is really signed in, whatever view is being simulated.
  realUser: User | null;
  /// The simulated view (owner only), or null for the real account.
  viewAs: ViewAs | null;
  /// Whether the signed-in account may switch views.
  canSwitchView: boolean;
  /// Switches view and reloads, so every page and request picks it up.
  setViewAs: (view: ViewAs | null) => void;
  session: Session | null;
  loading: boolean;
  signUp: (email: string, password: string, firstName?: string, lastName?: string) => Promise<void>;
  signIn: (email: string, password: string) => Promise<void>;
  signInWithGoogle: () => Promise<void>;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(false);
  // The owner's chosen view, read from its cookie. On the server there is
  // no document, but that is fine: the view only matters once the signed-in
  // user has loaded in the browser.
  const [cookieView] = useState<ViewAs | null>(() =>
    typeof document === 'undefined' ? null : viewAsFromCookieHeader(document.cookie),
  );

  // Initialize auth state on mount
  useEffect(() => {
    let mounted = true;

    const initAuth = async () => {
      try {
        console.log('Checking session...');
        const { data, error } = await supabase.auth.getSession();

        if (!mounted) return;

        if (error) {
          console.error('Session check error:', error);
        } else {
          console.log('Session checked:', data?.session ? 'authenticated' : 'not authenticated');
          setSession(data?.session ?? null);
          setUser(data?.session?.user ?? null);
        }
      } catch (error) {
        if (mounted) {
          console.error('Auth init error:', error);
        }
      }
    };

    // Setup auth state listener first (synchronous)
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      if (mounted) {
        console.log('Auth state:', event, session ? 'logged in' : 'logged out');
        setSession(session);
        setUser(session?.user ?? null);
      }
    });

    // Then check session (may be slow)
    initAuth();

    return () => {
      mounted = false;
      subscription?.unsubscribe();
    };
  }, []);

  const signUp = async (email: string, password: string, firstName?: string, lastName?: string) => {
    try {
      // Build user metadata with first and last names
      const metadata: Record<string, string> = {};
      if (firstName) metadata.first_name = firstName;
      if (lastName) metadata.last_name = lastName;
      if (firstName && lastName) metadata.full_name = `${firstName} ${lastName}`;

      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: metadata,
        },
      });
      if (error) {
        console.error('SignUp error:', error);
        throw new Error(error.message || 'Failed to sign up');
      }
    } catch (err) {
      console.error('SignUp exception:', err);
      throw err;
    }
  };

  const signIn = async (email: string, password: string) => {
    try {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      if (error) {
        console.error('SignIn error:', error);
        throw new Error(error.message || 'Failed to sign in');
      }
    } catch (err) {
      console.error('SignIn exception:', err);
      throw err;
    }
  };

  // Hands off to Google, which sends the user back to /auth/callback with a
  // one-time code. Using the live origin means the same code works on
  // localhost and in production without an environment variable.
  const signInWithGoogle = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: `${window.location.origin}/auth/callback`,
      },
    });
    if (error) {
      console.error('Google sign-in error:', error);
      throw new Error(error.message || 'Failed to sign in with Google');
    }
  };

  const signOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
  };

  // Only the owner's account can switch views; anyone else's cookie is
  // ignored here (and, more importantly, on the server).
  const canSwitchView = canSwitchViews(user?.email);
  const viewAs = canSwitchView ? cookieView : null;

  const setViewAs = (view: ViewAs | null) => {
    document.cookie = view
      ? `${VIEW_AS_COOKIE}=${view}; path=/; max-age=${60 * 60 * 24 * 30}; samesite=lax`
      : `${VIEW_AS_COOKIE}=; path=/; max-age=0; samesite=lax`;
    window.location.reload();
  };

  return (
    <AuthContext.Provider
      value={{
        user: viewAs === 'guest' ? null : user,
        realUser: user,
        viewAs,
        canSwitchView,
        setViewAs,
        session,
        loading,
        signUp,
        signIn,
        signInWithGoogle,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

// Hook to use auth context
export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
}
