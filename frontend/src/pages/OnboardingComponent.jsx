import React, { useState } from 'react';
import { ShieldCheck, Bug, LineChart, Book, Server, Code, Database, Cloud, UploadCloud, KeyRound, Mail, MessageSquare } from 'lucide-react';

// --- Helper Components ---

// Renders the progress bar at the top
const ProgressIndicator = ({ currentStep }) => {
  const steps = ['Purpose', 'Sources', 'Connect', 'Alerts'];
  return (
    <div className="w-full max-w-2xl mx-auto mb-12">
      <div className="flex justify-between items-center relative">
        <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-200 -translate-y-1/2"></div>
        <div
          className="absolute top-1/2 left-0 h-1 bg-blue-600 transition-all duration-500"
          style={{ width: `${((currentStep - 1) / (steps.length - 1)) * 100}%` }}
        ></div>
        {steps.map((step, index) => (
          <div key={index} className="relative z-10 flex flex-col items-center">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-500 ${
                currentStep >= index + 1 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-500'
              }`}
            >
              {index + 1}
            </div>
            <span className={`mt-2 text-xs font-semibold ${currentStep >= index + 1 ? 'text-blue-600' : 'text-gray-500'}`}>{step}</span>
          </div>
        ))}
      </div>
       <p className="text-center text-gray-500 text-sm mt-2">
        Step {currentStep} of {steps.length}
      </p>
    </div>
  );
};

// Generic button for selecting options
const SelectionButton = ({ icon: Icon, text, isSelected, onClick }) => (
  <button
    onClick={onClick}
    className={`flex items-center justify-center w-full px-4 py-3 border rounded-lg transition-all duration-200 text-sm font-medium
      ${isSelected
        ? 'bg-blue-50 border-blue-600 text-blue-700 shadow-sm'
        : 'bg-white border-gray-300 text-gray-700 hover:border-gray-400 hover:bg-gray-50'
      }`}
  >
    {Icon && <Icon className="w-5 h-5 mr-2" />}
    {text}
  </button>
);


// --- Wizard Step Components ---

const Step1Purpose = ({ onNext }) => {
    const [purpose, setPurpose] = useState('');
    const options = [
        { id: 'security', text: 'Security Monitoring', icon: ShieldCheck },
        { id: 'debugging', text: 'Debugging', icon: Bug },
        { id: 'performance', text: 'Performance', icon: LineChart },
        { id: 'compliance', text: 'Compliance', icon: Book },
    ];
    
    return (
        <div>
            <h2 className="text-xl font-semibold text-gray-800">1. Select Primary Purpose</h2>
            <p className="text-gray-500 mt-1 mb-6">This helps us tailor your experience.</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                {options.map(opt => (
                    <SelectionButton 
                        key={opt.id}
                        text={opt.text}
                        isSelected={purpose === opt.id}
                        onClick={() => setPurpose(opt.id)}
                    />
                ))}
            </div>
            <button onClick={onNext} disabled={!purpose} className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition disabled:bg-blue-300">
                Next
            </button>
        </div>
    );
};

const Step2LogSources = ({ onNext, onBack }) => {
    const [sources, setSources] = useState([]);
    const options = [
        { id: 'system', text: 'System Logs', icon: Server },
        { id: 'application', text: 'Application Logs', icon: Code },
        { id: 'web', text: 'Web Servers', icon: Cloud },
        { id: 'databases', text: 'Databases', icon: Database },
        { id: 'security_devices', text: 'Security Devices', icon: ShieldCheck },
        { id: 'cloud', text: 'Cloud', icon: Cloud },
    ];

    const toggleSource = (id) => {
        setSources(prev => prev.includes(id) ? prev.filter(s => s !== id) : [...prev, id]);
    };
    
    return (
        <div>
            <h2 className="text-xl font-semibold text-gray-800">2. Choose Log Sources</h2>
             <p className="text-gray-500 mt-1 mb-6">Select all that apply. You can change this later.</p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
               {options.map(opt => (
                    <SelectionButton 
                        key={opt.id}
                        text={opt.text}
                        isSelected={sources.includes(opt.id)}
                        onClick={() => toggleSource(opt.id)}
                    />
                ))}
            </div>
            <div className="flex justify-between">
                <button onClick={onBack} className="bg-gray-200 text-gray-700 font-semibold py-3 px-6 rounded-lg hover:bg-gray-300 transition">Back</button>
                <button onClick={onNext} disabled={sources.length === 0} className="bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-700 transition disabled:bg-blue-300">Next</button>
            </div>
        </div>
    );
};


const Step3ConnectData = ({ onNext, onBack }) => {
    return (
        <div>
            <h2 className="text-xl font-semibold text-gray-800">3. Connect Your Data</h2>
            <p className="text-gray-500 mt-1 mb-6">Upload a sample log file or connect to a live integration.</p>

            <div className="border-2 border-dashed border-gray-300 rounded-lg p-10 text-center mb-6 bg-gray-50">
                <UploadCloud className="w-12 h-12 mx-auto text-gray-400 mb-2"/>
                <p className="font-semibold text-gray-700">Click to upload or drag and drop</p>
                <p className="text-xs text-gray-500">Any plain text log file (e.g., .log, .txt)</p>
                 <input type="file" className="opacity-0 absolute inset-0 w-full h-full cursor-pointer" />
            </div>

            <div className="relative flex py-5 items-center">
                <div className="flex-grow border-t border-gray-300"></div>
                <span className="flex-shrink mx-4 text-gray-400 text-sm font-semibold">OR</span>
                <div className="flex-grow border-t border-gray-300"></div>
            </div>
            
            <div>
                 <label htmlFor="api-token" className="block text-sm font-medium text-gray-700 mb-2">Connect via API Token (Optional)</label>
                 <div className="relative">
                    <KeyRound className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"/>
                    <input id="api-token" type="text" placeholder="Enter your API token" className="w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"/>
                 </div>
            </div>

            <div className="flex justify-between mt-8">
                <button onClick={onBack} className="bg-gray-200 text-gray-700 font-semibold py-3 px-6 rounded-lg hover:bg-gray-300 transition">Back</button>
                <button onClick={onNext} className="bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-700 transition">Next</button>
            </div>
        </div>
    );
};


const Step4Alerts = ({ onBack, onFinish }) => {
    const [preferences, setPreferences] = useState([]);
     const options = [
        { id: 'email', text: 'Email', icon: Mail },
        { id: 'sms', text: 'SMS', icon: MessageSquare },
    ];
    
     const togglePreference = (id) => {
        setPreferences(prev => prev.includes(id) ? prev.filter(p => p !== id) : [...prev, id]);
    };

    return (
        <div>
            <h2 className="text-xl font-semibold text-gray-800">4. Set Alert Preferences</h2>
             <p className="text-gray-500 mt-1 mb-6">How would you like to be notified? Select all that apply.</p>
             <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                {options.map(opt => (
                    <SelectionButton 
                        key={opt.id}
                        text={opt.text}
                        icon={opt.icon}
                        isSelected={preferences.includes(opt.id)}
                        onClick={() => togglePreference(opt.id)}
                    />
                ))}
            </div>
            <div className="flex justify-between">
                <button onClick={onBack} className="bg-gray-200 text-gray-700 font-semibold py-3 px-6 rounded-lg hover:bg-gray-300 transition">Back</button>
                <button onClick={onFinish} className="bg-green-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-green-700 transition shadow-lg">
                    Finish Setup
                </button>
            </div>
        </div>
    );
};


// --- Main Onboarding Component ---

const OnboardingComponent = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const handleNext = () => setCurrentStep(prev => prev + 1);
  const handleBack = () => setCurrentStep(prev => prev - 1);
  const handleFinish = () => {
    alert('Setup Complete! Redirecting to dashboard...');
    // Here you would typically redirect the user:
    // history.push('/dashboard');
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <Step1Purpose onNext={handleNext} />;
      case 2:
        return <Step2LogSources onNext={handleNext} onBack={handleBack} />;
      case 3:
        return <Step3ConnectData onNext={handleNext} onBack={handleBack} />;
      case 4:
        return <Step4Alerts onBack={handleBack} onFinish={handleFinish} />;
      default:
        return <Step1Purpose onNext={handleNext} />;
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col items-center justify-center p-4">
        <div className="text-center mb-10">
            <h1 className="text-3xl font-bold text-gray-800">Welcome to LogSight</h1>
            <p className="text-gray-500">Let's get you set up. This will only take a minute.</p>
        </div>
      <div className="w-full max-w-2xl bg-white p-8 rounded-xl shadow-lg">
        <ProgressIndicator currentStep={currentStep} />
        <div className="mt-8">
            {renderStep()}
        </div>
      </div>
    </div>
  );
};

export default OnboardingComponent;
