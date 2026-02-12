import { Button } from '@/components/ui/button';
import { useInternetIdentity } from '../../hooks/useInternetIdentity';
import { LogIn, LogOut, Loader2 } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export function AuthButton() {
  const { identity, login, clear, isLoggingIn, isLoginSuccess } = useInternetIdentity();

  const isSignedIn = isLoginSuccess && identity && !identity.getPrincipal().isAnonymous();

  if (isLoggingIn) {
    return (
      <Button variant="ghost" size="sm" disabled>
        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
        Connecting...
      </Button>
    );
  }

  if (isSignedIn) {
    const principal = identity.getPrincipal().toString();
    const shortPrincipal = `${principal.slice(0, 5)}...${principal.slice(-3)}`;

    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="sm">
            {shortPrincipal}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={clear}>
            <LogOut className="mr-2 h-4 w-4" />
            Sign Out
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  }

  return (
    <Button variant="default" size="sm" onClick={login}>
      <LogIn className="mr-2 h-4 w-4" />
      Sign In
    </Button>
  );
}
