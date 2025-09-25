import React from 'react';
import { Link } from 'react-router-dom';
import { 
  User, 
  Settings, 
  FileText, 
  BarChart3, 
  Shield, 
  Save,
  ArrowLeft,
  Eye,
  Download,
  Trash2,
  Plus
} from 'lucide-react';

function SettingsPage() {
  const tabs = [
    { id: 'user-settings', name: 'User Settings', icon: User },
    { id: 'log-formats', name: 'Log Formats & Governance', icon: FileText },
    { id: 'log-controls', name: 'Log Controls & Insights', icon: Settings },
    { id: 'analytics', name: 'Analytics & Admin', icon: BarChart3 },
    { id: 'security', name: 'Security & Access', icon: Shield },
  ];

  return (
    <div className="min-h-screen bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center mb-4">
            <Link to="/" className="text-gray-400 hover:text-white mr-4">
              <ArrowLeft className="h-5 w-5" />
            </Link>
            <h1 className="text-3xl font-bold text-white">User Information & Settings</h1>
          </div>
          <p className="text-gray-400">Manage your account settings and preferences</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Navigation */}
          <div className="lg:col-span-1">
            <nav className="space-y-1">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  className="w-full text-left px-3 py-2 rounded-lg flex items-center space-x-3 text-gray-300 hover:text-white hover:bg-slate-700"
                  type="button"
                >
                  <tab.icon className="h-5 w-5" />
                  <span className="text-sm font-medium">{tab.name}</span>
                </button>
              ))}
            </nav>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="bg-slate-800 rounded-xl p-6 space-y-8">

              {/* Profile Information */}
              <div>
                <h3 className="text-lg font-medium text-white mb-4">Profile Information</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {['First Name', 'Last Name', 'Email Address', 'Phone Number'].map((label) => (
                    <div key={label}>
                      <label className="block text-sm font-medium text-gray-300 mb-2">{label}</label>
                      <input
                        type="text"
                        placeholder={label}
                        className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-md text-white focus:outline-none focus:border-teal-500"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Notification Preferences */}
              <div>
                <h3 className="text-lg font-medium text-white mb-4">Notification Preferences</h3>
                <div className="space-y-4">
                  {['Email Notifications', 'SMS Alerts'].map((notif) => (
                    <div key={notif} className="flex items-center justify-between">
                      <div>
                        <div className="text-sm font-medium text-white">{notif}</div>
                        <div className="text-xs text-gray-400">This is a sample description for {notif.toLowerCase()}.</div>
                      </div>
                      <input type="checkbox" className="rounded" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Log Formats */}
              <div>
                <h3 className="text-lg font-medium text-white mb-4">Supported Log Formats</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {['JSON Logs', 'Syslog', 'Apache Access', 'Custom Format'].map((format) => (
                    <div key={format} className="bg-slate-700 p-4 rounded-lg flex items-center justify-between">
                      <div className="text-white font-medium">{format}</div>
                      <span className="px-2 py-1 text-xs rounded bg-green-600 text-white">Active</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Active Filters */}
              <div>
                <h3 className="text-lg font-medium text-white mb-4">Active Filters</h3>
                <div className="space-y-3">
                  {['Failed Login Attempts', 'High CPU Usage'].map((filter) => (
                    <div key={filter} className="bg-slate-700 p-4 rounded-lg flex items-center justify-between">
                      <div className="text-white font-medium">{filter}</div>
                      <div className="flex items-center space-x-2">
                        <Eye className="h-4 w-4 text-gray-400" />
                        <Trash2 className="h-4 w-4 text-gray-400" />
                      </div>
                    </div>
                  ))}
                </div>
                <button className="mt-4 bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-lg flex items-center">
                  <Plus className="h-4 w-4 mr-2" />
                  Add New Filter
                </button>
              </div>

            </div>

            {/* Save Button */}
            <div className="mt-8 pt-6 border-t border-slate-700 flex justify-end">
              <button className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-2 rounded-lg font-semibold flex items-center">
                <Save className="h-4 w-4 mr-2" />
                Save Changes
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default SettingsPage;
