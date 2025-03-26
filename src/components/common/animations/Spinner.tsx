const Spinner: React.FC = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm">
      <div className="relative h-12 w-12" role="status" aria-label="Loading">
        <div className="absolute inset-0 border-4 border-muted border-t-primary rounded-full animate-spin"></div>
      </div>
    </div>
  );
};

export default Spinner;
