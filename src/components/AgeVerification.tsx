import Logo from './Logo';

interface AgeVerificationProps {
  onVerify: (verified: boolean) => void;
}

function AgeVerification({ onVerify }: AgeVerificationProps) {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-6">
      <div className="max-w-md w-full text-center">
        <div className="mb-8 flex justify-center">
          <Logo className="h-40" />
        </div>

        <div className="w-24 h-px bg-brand mx-auto mb-8"></div>

        <h2 className="text-2xl text-white mb-8 font-semibold">
          Let's see some I.D. Are you 21+
        </h2>

        <div className="flex gap-4 justify-center">
          <button
            onClick={() => onVerify(true)}
            className="btn-shine px-8 py-3 rounded-full bg-black border border-white/20 text-white font-semibold tracking-wider hover:!bg-brand hover:!text-black hover:border-brand transition-all duration-300"
          >
            YES
          </button>
          <button
            onClick={() => onVerify(false)}
            className="btn-shine px-8 py-3 rounded-full bg-black border border-white/20 text-white font-semibold tracking-wider hover:!bg-brand hover:!text-black hover:border-brand transition-all duration-300"
          >
            BUSTED!
          </button>
        </div>

        <p className="text-gray-600 text-xs mt-8">
          By entering this site you agree to our terms of use and privacy policy.
        </p>
      </div>
    </div>
  );
}

export default AgeVerification;
