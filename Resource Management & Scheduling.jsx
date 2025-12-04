import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from 'recharts';
import { Calendar, Users, TrendingUp, Network } from 'lucide-react';

const Assignment4Dashboard = () => {
  const [activeTab, setActiveTab] = useState('ram');

  // Team Members
  const teamMembers = [
    { id: 'RA', name: 'Rayan Ahmed', roll: '22i-2489' },
    { id: 'AR', name: 'Abdur Rehman', roll: '22i-2518' },
    { id: 'BR', name: 'Bilal Raza', roll: '22i-2559' }
  ];

  // Resource Assignment Matrix (RAM) - RACI Format
  const ramData = [
    { phase: '1.1 Stakeholder Needs Identification', RA: 'R', AR: 'A', BR: 'C', duration: 1 },
    { phase: '1.2 Functional & Non-Functional Requirements', RA: 'A', AR: 'R', BR: 'C', duration: 1.5 },
    { phase: '1.3 Technology Stack Selection', RA: 'C', AR: 'C', BR: 'R/A', duration: 0.5 },
    { phase: '2.1 Agent Architecture Design', RA: 'R', AR: 'C', BR: 'A', duration: 1.5 },
    { phase: '2.2 API Architecture Design', RA: 'C', AR: 'R', BR: 'A', duration: 1.5 },
    { phase: '2.3 Data Model Design', RA: 'A', AR: 'R', BR: 'C', duration: 1 },
    { phase: '2.4 External API Integration Design', RA: 'R', AR: 'A', BR: 'C', duration: 1 },
    { phase: '3.1 CrewAI Agent Module Development', RA: 'R/A', AR: 'C', BR: 'C', duration: 3 },
    { phase: '3.2 Data Models Module Development', RA: 'C', AR: 'R/A', BR: 'C', duration: 1 },
    { phase: '3.3 FastAPI Backend Development', RA: 'C', AR: 'C', BR: 'R/A', duration: 2 },
    { phase: '3.4 OpenWeatherMap API Integration', RA: 'R', AR: 'A', BR: 'C', duration: 1 },
    { phase: '3.5 Logging & Monitoring Setup', RA: 'C', AR: 'R', BR: 'A', duration: 1 },
    { phase: '4.1 Module Integration', RA: 'R', AR: 'R', BR: 'A', duration: 0.5 },
    { phase: '4.2 Unit Testing', RA: 'A', AR: 'R', BR: 'C', duration: 1 },
    { phase: '4.3 Integration Testing', RA: 'C', AR: 'A', BR: 'R', duration: 1 },
    { phase: '4.4 Quick Validation Testing', RA: 'R', AR: 'C', BR: 'A', duration: 0.5 },
    { phase: '5.1 Containerization Setup', RA: 'C', AR: 'R', BR: 'A', duration: 0.25 },
    { phase: '5.2 Environment Configuration', RA: 'R', AR: 'A', BR: 'C', duration: 0.25 },
    { phase: '5.3 Deployment Platforms', RA: 'A', AR: 'C', BR: 'R', duration: 0.25 },
    { phase: '5.4 Documentation & Handover', RA: 'R', AR: 'R', BR: 'R', duration: 0.25 }
  ];

  // Initial Resource Loading (Before Leveling) - Weekly
  const initialLoadingData = [
    { week: 'Week 1', RA: 2.5, AR: 3, BR: 1.5 },
    { week: 'Week 2', RA: 4, AR: 2.5, BR: 3 },
    { week: 'Week 3', RA: 5, AR: 3.5, BR: 4.5 },
    { week: 'Week 4', RA: 3, AR: 4, BR: 5 },
    { week: 'Week 5', RA: 2, AR: 2.5, BR: 2 }
  ];

  // Leveled Resource Loading (After Leveling)
  const leveledLoadingData = [
    { week: 'Week 1', RA: 2.5, AR: 2.5, BR: 2 },
    { week: 'Week 2', RA: 3, AR: 3, BR: 3 },
    { week: 'Week 3', RA: 3.5, AR: 3.5, BR: 3.5 },
    { week: 'Week 4', RA: 3.5, AR: 3, BR: 3 },
    { week: 'Week 5', RA: 2, AR: 2.5, BR: 2.5 },
    { week: 'Week 6', RA: 2, AR: 2, BR: 2 }
  ];

  // Project-level resource usage
  const projectResourceData = [
    { week: 'Week 1', initial: 7, leveled: 7 },
    { week: 'Week 2', initial: 9.5, leveled: 9 },
    { week: 'Week 3', initial: 13, leveled: 10.5 },
    { week: 'Week 4', initial: 12, leveled: 9.5 },
    { week: 'Week 5', initial: 6.5, leveled: 7 },
    { week: 'Week 6', initial: 0, leveled: 6 }
  ];

  const renderRAM = () => (
    <div className="bg-white p-6 rounded-lg shadow">
      <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
        <Users className="w-5 h-5" />
        Resource Assignment Matrix (RACI)
      </h3>
      <div className="mb-4 p-4 bg-blue-50 rounded">
        <p className="font-semibold">RACI Legend:</p>
        <ul className="mt-2 space-y-1 text-sm">
          <li><strong>R</strong> - Responsible (Does the work)</li>
          <li><strong>A</strong> - Accountable (Makes decisions, ultimately answerable)</li>
          <li><strong>C</strong> - Consulted (Provides input)</li>
          <li><strong>I</strong> - Informed (Kept up-to-date)</li>
        </ul>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-gray-100">
              <th className="border p-2 text-left">WBS Activity</th>
              <th className="border p-2">Rayan Ahmed</th>
              <th className="border p-2">Abdur Rehman</th>
              <th className="border p-2">Bilal Raza</th>
              <th className="border p-2">Duration (days)</th>
            </tr>
          </thead>
          <tbody>
            {ramData.map((row, idx) => (
              <tr key={idx} className={idx % 2 === 0 ? 'bg-gray-50' : ''}>
                <td className="border p-2">{row.phase}</td>
                <td className="border p-2 text-center font-semibold">{row.RA}</td>
                <td className="border p-2 text-center font-semibold">{row.AR}</td>
                <td className="border p-2 text-center font-semibold">{row.BR}</td>
                <td className="border p-2 text-center">{row.duration}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  const renderResourceLoading = () => (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
          <BarChart className="w-5 h-5" />
          Initial Resource Loading (Before Leveling)
        </h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={initialLoadingData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="week" />
            <YAxis label={{ value: 'Person-Days', angle: -90, position: 'insideLeft' }} />
            <Tooltip />
            <Legend />
            <Bar dataKey="RA" fill="#3b82f6" name="Rayan Ahmed" />
            <Bar dataKey="AR" fill="#10b981" name="Abdur Rehman" />
            <Bar dataKey="BR" fill="#f59e0b" name="Bilal Raza" />
          </BarChart>
        </ResponsiveContainer>
        <div className="mt-4 p-4 bg-red-50 rounded">
          <h4 className="font-semibold text-red-800 mb-2">Resource Conflicts Identified:</h4>
          <ul className="text-sm space-y-1">
            <li>• <strong>Week 3:</strong> Rayan (5 days) and Bilal (4.5 days) are overallocated</li>
            <li>• <strong>Week 4:</strong> Abdur Rehman (4 days) and Bilal (5 days) are overallocated</li>
            <li>• Peak workload in Week 3 (13 person-days) exceeds sustainable capacity</li>
          </ul>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-4">
        {teamMembers.map(member => (
          <div key={member.id} className="bg-white p-4 rounded-lg shadow">
            <h4 className="font-semibold mb-2">{member.name}</h4>
            <ResponsiveContainer width="100%" height={150}>
              <LineChart data={initialLoadingData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="week" tick={{ fontSize: 10 }} />
                <YAxis tick={{ fontSize: 10 }} />
                <Tooltip />
                <Line type="monotone" dataKey={member.id} stroke="#3b82f6" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
            <div className="mt-2 text-xs">
              <p className="text-red-600">⚠️ Over-allocated: {
                initialLoadingData.filter(w => w[member.id] > 4).map(w => w.week).join(', ') || 'None'
              }</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderResourceLeveling = () => (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
          <TrendingUp className="w-5 h-5" />
          Resource Leveling Results
        </h3>
        
        <div className="mb-6">
          <h4 className="font-semibold mb-3">Project-Level Resource Usage Comparison</h4>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={projectResourceData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="week" />
              <YAxis label={{ value: 'Total Person-Days', angle: -90, position: 'insideLeft' }} />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="initial" stroke="#ef4444" strokeWidth={2} name="Before Leveling" strokeDasharray="5 5" />
              <Line type="monotone" dataKey="leveled" stroke="#10b981" strokeWidth={2} name="After Leveling" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="mb-6 p-4 bg-green-50 rounded">
          <h4 className="font-semibold text-green-800 mb-2">Leveling Techniques Applied:</h4>
          <ol className="text-sm space-y-2 list-decimal list-inside">
            <li><strong>Task Smoothing:</strong> Extended project duration from 5 to 6 weeks</li>
            <li><strong>Task Splitting:</strong> Split large development tasks across multiple weeks</li>
            <li><strong>Resource Substitution:</strong> Reassigned tasks to balance workload</li>
            <li><strong>Fast-tracking:</strong> Parallelized independent testing activities</li>
          </ol>
        </div>

        <h4 className="font-semibold mb-3">After Leveling - Individual Workloads</h4>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={leveledLoadingData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="week" />
            <YAxis label={{ value: 'Person-Days', angle: -90, position: 'insideLeft' }} />
            <Tooltip />
            <Legend />
            <Bar dataKey="RA" fill="#3b82f6" name="Rayan Ahmed" />
            <Bar dataKey="AR" fill="#10b981" name="Abdur Rehman" />
            <Bar dataKey="BR" fill="#f59e0b" name="Bilal Raza" />
          </BarChart>
        </ResponsiveContainer>

        <div className="mt-4 p-4 bg-blue-50 rounded">
          <h4 className="font-semibold text-blue-800 mb-2">Improvements Achieved:</h4>
          <ul className="text-sm space-y-1">
            <li>✓ Eliminated all overallocations (no team member exceeds 4 days/week)</li>
            <li>✓ Reduced peak workload from 13 to 10.5 person-days</li>
            <li>✓ Smoother resource distribution across project timeline</li>
            <li>✓ Maintained critical path while improving work-life balance</li>
          </ul>
        </div>
      </div>
    </div>
  );

  const renderSchedule = () => (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
          <Calendar className="w-5 h-5" />
          Updated Project Schedule (Resource-Constrained)
        </h3>
        
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="border p-2 text-left">Activity</th>
                <th className="border p-2">Original Start</th>
                <th className="border p-2">Original End</th>
                <th className="border p-2">Updated Start</th>
                <th className="border p-2">Updated End</th>
                <th className="border p-2">Duration</th>
                <th className="border p-2">Resource</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-gray-50">
                <td className="border p-2">Requirements & Analysis</td>
                <td className="border p-2">Week 1</td>
                <td className="border p-2">Week 1</td>
                <td className="border p-2">Week 1</td>
                <td className="border p-2">Week 1</td>
                <td className="border p-2">3 days</td>
                <td className="border p-2">All</td>
              </tr>
              <tr>
                <td className="border p-2">System & Architecture Design</td>
                <td className="border p-2">Week 1-2</td>
                <td className="border p-2">Week 2</td>
                <td className="border p-2">Week 1-2</td>
                <td className="border p-2">Week 2</td>
                <td className="border p-2">5 days</td>
                <td className="border p-2">All</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border p-2">CrewAI Agent Module</td>
                <td className="border p-2">Week 2-3</td>
                <td className="border p-2">Week 3</td>
                <td className="border p-2 bg-yellow-100">Week 2-4</td>
                <td className="border p-2 bg-yellow-100">Week 4</td>
                <td className="border p-2">3 days</td>
                <td className="border p-2">Rayan</td>
              </tr>
              <tr>
                <td className="border p-2">Data Models Module</td>
                <td className="border p-2">Week 3</td>
                <td className="border p-2">Week 3</td>
                <td className="border p-2 bg-yellow-100">Week 3</td>
                <td className="border p-2 bg-yellow-100">Week 3</td>
                <td className="border p-2">1 day</td>
                <td className="border p-2">Abdur</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border p-2">FastAPI Backend</td>
                <td className="border p-2">Week 3</td>
                <td className="border p-2">Week 3</td>
                <td className="border p-2 bg-yellow-100">Week 3-4</td>
                <td className="border p-2 bg-yellow-100">Week 4</td>
                <td className="border p-2">2 days</td>
                <td className="border p-2">Bilal</td>
              </tr>
              <tr>
                <td className="border p-2">API Integration</td>
                <td className="border p-2">Week 4</td>
                <td className="border p-2">Week 4</td>
                <td className="border p-2 bg-yellow-100">Week 4</td>
                <td className="border p-2 bg-yellow-100">Week 4</td>
                <td className="border p-2">1 day</td>
                <td className="border p-2">Rayan</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border p-2">Logging & Monitoring</td>
                <td className="border p-2">Week 4</td>
                <td className="border p-2">Week 4</td>
                <td className="border p-2 bg-yellow-100">Week 4-5</td>
                <td className="border p-2 bg-yellow-100">Week 5</td>
                <td className="border p-2">1 day</td>
                <td className="border p-2">Abdur</td>
              </tr>
              <tr>
                <td className="border p-2">Integration & Testing</td>
                <td className="border p-2">Week 4-5</td>
                <td className="border p-2">Week 5</td>
                <td className="border p-2 bg-yellow-100">Week 5</td>
                <td className="border p-2 bg-yellow-100">Week 5</td>
                <td className="border p-2">3 days</td>
                <td className="border p-2">All</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border p-2">Deployment & Configuration</td>
                <td className="border p-2">Week 5</td>
                <td className="border p-2">Week 5</td>
                <td className="border p-2 bg-yellow-100">Week 6</td>
                <td className="border p-2 bg-yellow-100">Week 6</td>
                <td className="border p-2">1 day</td>
                <td className="border p-2">All</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="p-4 bg-amber-50 rounded">
          <h4 className="font-semibold text-amber-800 mb-2">Key Schedule Changes:</h4>
          <ul className="text-sm space-y-1">
            <li>• Extended project from 5 to 6 weeks to resolve resource conflicts</li>
            <li>• Split CrewAI Agent Module development across Week 2-4</li>
            <li>• Moved FastAPI Backend to span Week 3-4 to avoid Bilal's overallocation</li>
            <li>• Shifted Deployment phase to Week 6 for smoother resource distribution</li>
            <li>• Maintained critical path dependencies while optimizing resource usage</li>
          </ul>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
          <Network className="w-5 h-5" />
          Activity-on-Node (AON) Network Diagram
        </h3>
        <div className="p-4 bg-gray-50 rounded text-center">
          <p className="text-sm text-gray-600 mb-4">Updated Network Diagram with Resource-Constrained Schedule</p>
          <div className="flex flex-col items-center gap-4">
            <div className="flex items-center gap-4">
              <div className="border-2 border-blue-500 bg-white p-3 rounded shadow">
                <div className="font-bold text-sm">Requirements</div>
                <div className="text-xs">Week 1 | 3d</div>
              </div>
              <div className="text-2xl">→</div>
              <div className="border-2 border-blue-500 bg-white p-3 rounded shadow">
                <div className="font-bold text-sm">Design</div>
                <div className="text-xs">Week 1-2 | 5d</div>
              </div>
            </div>
            
            <div className="text-2xl">↓</div>
            
            <div className="flex items-center gap-4">
              <div className="border-2 border-green-500 bg-white p-3 rounded shadow">
                <div className="font-bold text-sm">Agent Module</div>
                <div className="text-xs">Week 2-4 | 3d</div>
              </div>
              <div className="border-2 border-green-500 bg-white p-3 rounded shadow">
                <div className="font-bold text-sm">Data Models</div>
                <div className="text-xs">Week 3 | 1d</div>
              </div>
              <div className="border-2 border-green-500 bg-white p-3 rounded shadow">
                <div className="font-bold text-sm">FastAPI</div>
                <div className="text-xs">Week 3-4 | 2d</div>
              </div>
            </div>
            
            <div className="text-2xl">↓</div>
            
            <div className="flex items-center gap-4">
              <div className="border-2 border-amber-500 bg-white p-3 rounded shadow">
                <div className="font-bold text-sm">Integration</div>
                <div className="text-xs">Week 4 | 0.5d</div>
              </div>
              <div className="text-2xl">→</div>
              <div className="border-2 border-amber-500 bg-white p-3 rounded shadow">
                <div className="font-bold text-sm">Testing</div>
                <div className="text-xs">Week 5 | 3d</div>
              </div>
              <div className="text-2xl">→</div>
              <div className="border-2 border-red-500 bg-white p-3 rounded shadow">
                <div className="font-bold text-sm">Deployment</div>
                <div className="text-xs">Week 6 | 1d</div>
              </div>
            </div>
          </div>
          <div className="mt-4 text-xs text-gray-600">
            <p><strong>Critical Path:</strong> Requirements → Design → Agent Module → Integration → Testing → Deployment</p>
            <p className="mt-1"><strong>Project Duration:</strong> 6 weeks (extended from 5 weeks due to resource leveling)</p>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="bg-white p-6 rounded-lg shadow mb-6">
          <h1 className="text-3xl font-bold mb-2">Assignment 04: Resource Management & Scheduling</h1>
          <div className="text-sm text-gray-600">
            <p><strong>Project:</strong> Pollution Monitor Agent</p>
            <p><strong>Team Members:</strong> Rayan Ahmed (22i-2489), Abdur Rehman (22i-2518), Bilal Raza (22i-2559)</p>
            <p><strong>Course:</strong> Software Project Management | <strong>Instructor:</strong> Sir Muhammad Bilal</p>
            <p><strong>Submission Date:</strong> 4th December, 2025</p>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="bg-white rounded-lg shadow mb-6">
          <div className="flex border-b">
            <button
              onClick={() => setActiveTab('ram')}
              className={`px-6 py-3 font-semibold ${activeTab === 'ram' ? 'border-b-2 border-blue-500 text-blue-600' : 'text-gray-600'}`}
            >
              1. Resource Assignment Matrix
            </button>
            <button
              onClick={() => setActiveTab('loading')}
              className={`px-6 py-3 font-semibold ${activeTab === 'loading' ? 'border-b-2 border-blue-500 text-blue-600' : 'text-gray-600'}`}
            >
              2. Resource Loading
            </button>
            <button
              onClick={() => setActiveTab('leveling')}
              className={`px-6 py-3 font-semibold ${activeTab === 'leveling' ? 'border-b-2 border-blue-500 text-blue-600' : 'text-gray-600'}`}
            >
              3. Resource Leveling
            </button>
            <button
              onClick={() => setActiveTab('schedule')}
              className={`px-6 py-3 font-semibold ${activeTab === 'schedule' ? 'border-b-2 border-blue-500 text-blue-600' : 'text-gray-600'}`}
            >
              4. Updated Schedule & AON
            </button>
          </div>
        </div>

        {/* Content */}
        {activeTab === 'ram' && renderRAM()}
        {activeTab === 'loading' && renderResourceLoading()}
        {activeTab === 'leveling' && renderResourceLeveling()}
        {activeTab === 'schedule' && renderSchedule()}
      </div>
    </div>
  );
};

export default Assignment4Dashboard;