import { Button } from "@/components/ui/button";
import { SignedIn, SignedOut, SignOutButton, SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  return (
    <div>
      <SignedIn>
        <h1 className="text-navy-900 mb-2 text-2xl font-bold">
          You&apos;re already signed in, so you can&apos;t make a &quot;new
          account&quot;.
        </h1>
        <p className="mb-6 text-gray-600">
          Log out to create a &quot;new account&quot;.
        </p>
        <Button variant="primary" asChild>
          <SignOutButton redirectUrl="/oao/sign-up" />
        </Button>
      </SignedIn>
      <SignedOut>
        {/* Header */}
        <h1 className="text-navy-900 mb-2 text-2xl font-bold">
          I don&apos;t have designs for this yet, so we&apos;re just using the
          default create account UI.
        </h1>
        <p className="mb-6 text-gray-600">
          This is the first time we actually save data during this process, so
          create a real login.
        </p>
        <p>
          Note: You will always be redirected to the final OAO screen after
          signing up or signing in from this page. This is so you can keep
          testing the flow.
        </p>
        <SignUp
          forceRedirectUrl="/oao/complete"
          signInForceRedirectUrl="/oao/complete"
        />
      </SignedOut>
    </div>
  );
}
