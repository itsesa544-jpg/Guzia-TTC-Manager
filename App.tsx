import React, { useState } from 'react';
import { Header } from './components/Header';
import { Dashboard } from './components/Dashboard';
import { AdmissionForm } from './components/AdmissionForm';
import { PaymentForm } from './components/PaymentForm';
import { StudentList } from './components/StudentList';
import { ExpenseManager } from './components/ExpenseManager';
import { DataBackup } from './components/DataBackup';
import { useStudents } from './hooks/useStudents';
import { TabType } from './types';
import { 
  UserPlus, 
  CreditCard, 
  Database, 
  TrendingDown, 
  LayoutDashboard, 
  Menu,
  X,
  LogOut,
  Settings,
  ArrowRight,
  Wrench
} from 'lucide-react';

const App: React.FC = () => {
  const { 
    students, 
    expenses, 
    addStudent, 
    addPayment, 
    deleteStudent, 
    addExpense, 
    deleteExpense,
    importData,
    resetData 
  } = useStudents();

  const [activeTab, setActiveTab] = useState<TabType>('dashboard');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showLanding, setShowLanding] = useState(true);

  const menuItems = [
    { id: 'dashboard', label: 'ড্যাশবোর্ড', icon: <LayoutDashboard size={20} /> },
    { id: 'admission', label: 'নতুন ভর্তি', icon: <UserPlus size={20} /> },
    { id: 'payment', label: 'টাকা জমা', icon: <CreditCard size={20} /> },
    { id: 'expense', label: 'খরচ হিসাব', icon: <TrendingDown size={20} /> },
    { id: 'database', label: 'ছাত্র তালিকা', icon: <Database size={20} /> },
    { id: 'settings', label: 'ডেটা ব্যাকআপ', icon: <Settings size={20} /> },
  ];

  const renderContent = () => {
    switch(activeTab) {
      case 'dashboard': return <Dashboard students={students} expenses={expenses} />;
      case 'admission': return <AdmissionForm onAddStudent={addStudent} students={students} />;
      case 'payment': return <PaymentForm onAddPayment={addPayment} students={students} />;
      case 'expense': return <ExpenseManager expenses={expenses} onAddExpense={addExpense} onDeleteExpense={deleteExpense} />;
      case 'database': return <StudentList students={students} onDelete={deleteStudent} />;
      case 'settings': return <DataBackup students={students} expenses={expenses} onImport={importData} onReset={resetData} />;
      default: return <Dashboard students={students} expenses={expenses} />;
    }
  };

  if (showLanding) {
    return (
      <div className="h-[100dvh] w-full bg-gradient-to-br from-blue-900 via-indigo-900 to-slate-900 flex flex-col items-center justify-center text-white p-6 relative overflow-hidden">
        
        {/* Decorative Background Elements */}
        <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-[-10%] right-[-10%] w-96 h-96 bg-indigo-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-[-20%] left-[20%] w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

        <div className="z-10 text-center space-y-8 animate-fade-in max-w-4xl">
          <div className="inline-block p-6 bg-white/10 backdrop-blur-lg rounded-full shadow-2xl border border-white/20 mb-4">
             <Wrench size={64} className="text-yellow-400" />
          </div>
          
          <div className="space-y-4">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight drop-shadow-lg">
              হ্যালো, <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                গুজিয়া টেকনিক্যাল ট্রেনিং সেন্টার
              </span>
            </h1>
            <p className="text-lg md:text-2xl text-gray-300 font-light max-w-2xl mx-auto">
              আধুনিক স্টুডেন্ট ম্যানেজমেন্ট ও ডিজিটাল হিসাব-নিকাশ সিস্টেমে আপনাকে স্বাগতম
            </p>
          </div>

          <div className="pt-8">
            <button 
              onClick={() => setShowLanding(false)}
              className="group relative inline-flex items-center justify-center px-8 py-4 text-xl font-bold text-white transition-all duration-300 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-full hover:from-yellow-400 hover:to-orange-500 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-yellow-500/50 shadow-lg shadow-orange-500/30"
            >
              <span className="mr-3">ক্লিক করে শুরু করুন</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              
              {/* Ripple Effect Container */}
              <span className="absolute inset-0 rounded-full ring-2 ring-white/30 group-hover:ring-4 transition-all duration-500"></span>
            </button>
          </div>
        </div>

        <div className="absolute bottom-6 text-gray-400 text-sm font-light z-10">
          সুরক্ষিত ও নির্ভরযোগ্য সফটওয়্যার সল্যুশন
        </div>
      </div>
    );
  }

  return (
    // Use 100dvh for better mobile browser support (addresses address bar resize issues)
    <div className="h-[100dvh] w-full bg-gray-100 flex flex-col font-sans overflow-hidden">
      
      {/* Top Main Header - Hidden on Mobile to save space and prevent layout issues */}
      <div className="flex-none z-30 relative hidden md:block shadow-md">
        <Header />
      </div>
      
      <div className="flex flex-1 overflow-hidden relative">
        
        {/* Mobile Sidebar Overlay */}
        {isMobileMenuOpen && (
          <div 
            className="fixed inset-0 bg-black/50 z-40 md:hidden transition-opacity backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}

        {/* Sidebar Navigation */}
        <aside 
          className={`
            bg-gray-900 text-white w-72 md:w-64 flex-shrink-0 flex flex-col transition-transform duration-300 ease-in-out z-50 shadow-2xl
            absolute inset-y-0 left-0 md:static md:translate-x-0 h-full border-r border-gray-800
            ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}
          `}
        >
          {/* Mobile Sidebar Header */}
          <div className="p-4 border-b border-gray-800 flex justify-between items-center md:hidden bg-gray-900">
             <span className="font-bold text-xl text-blue-400 flex items-center gap-2">
                <span className="bg-blue-600 text-white p-1 rounded">GTTC</span> মেনু
             </span>
             <button 
               onClick={() => setIsMobileMenuOpen(false)} 
               className="text-gray-400 hover:text-white p-2 rounded-full hover:bg-gray-800 transition-colors"
             >
               <X size={24} />
             </button>
          </div>

          {/* Desktop Sidebar Title */}
          <div className="p-6 border-b border-gray-800 hidden md:block">
            <h2 className="text-xl font-bold text-blue-400 tracking-wide">মেইন মেনু</h2>
          </div>
          
          {/* Menu Items */}
          <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id as TabType);
                  setIsMobileMenuOpen(false);
                }}
                className={`
                  w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 font-medium group
                  ${activeTab === item.id 
                    ? 'bg-blue-600 text-white shadow-lg translate-x-1' 
                    : 'text-gray-400 hover:bg-gray-800 hover:text-white hover:translate-x-1'
                  }
                `}
              >
                <span className={`${activeTab === item.id ? 'text-white' : 'text-gray-400 group-hover:text-white'}`}>
                  {item.icon}
                </span>
                {item.label}
              </button>
            ))}
          </nav>
          
          <div className="p-4 border-t border-gray-800 text-xs text-gray-500 text-center">
            <div className="flex justify-center items-center gap-1 mb-2 text-gray-600">
               <LogOut size={12}/> V 1.0.3
            </div>
            Developed for GTTC
          </div>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-50 w-full relative scroll-smooth">
          
          {/* Mobile Header Bar - Sticky & Enhanced */}
          <div className="md:hidden sticky top-0 z-30 bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-200 px-4 py-3 flex items-center justify-between">
             <div className="flex items-center gap-3">
                 <button 
                    onClick={() => setIsMobileMenuOpen(true)}
                    className="p-2 -ml-2 rounded-lg text-gray-600 hover:bg-gray-100 hover:text-blue-600 transition-colors"
                 >
                    <Menu size={24} />
                 </button>
                 <h2 className="font-bold text-gray-800 text-lg truncate flex items-center gap-2">
                    <span className="text-blue-600 font-extrabold">GTTC</span>
                    <span className="text-gray-300 text-xl font-light">|</span>
                    <span>{menuItems.find(i => i.id === activeTab)?.label}</span>
                 </h2>
             </div>
          </div>

          {/* Content Container */}
          <div className="p-4 md:p-8 max-w-7xl mx-auto min-h-full pb-20 md:pb-10">
            <div className="animate-fade-in">
              {renderContent()}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;