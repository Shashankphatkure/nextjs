import { useState } from 'react';
import {
  XMarkIcon,
  PencilIcon,
  ChatBubbleLeftIcon,
  DocumentDuplicateIcon,
  ClockIcon,
  CurrencyDollarIcon,
  CheckCircleIcon,
  TagIcon,
  PaperClipIcon,
  ChevronDownIcon,
  PlusIcon,
  CalendarIcon,
  UserCircleIcon,
  BellIcon,
  ArrowTopRightOnSquareIcon,
  DocumentIcon,
  PhotoIcon,
  ArrowDownTrayIcon,
  EyeIcon,
  DocumentTextIcon,
  DocumentChartBarIcon,
  FolderIcon,
  LinkIcon,
  UserIcon,
  ChatBubbleOvalLeftIcon
} from '@heroicons/react/24/outline';

export default function OrderViewModal({ order, onClose }) {
  const [isEditing, setIsEditing] = useState(false);
  const [activeTab, setActiveTab] = useState('details'); // ['details', 'activity', 'files']

  // Default data
  const attachments = order.attachments || [
    { name: 'Project Brief.pdf', size: '2.4 MB', type: 'pdf', date: '2024-03-10' },
    { name: 'Design Assets.zip', size: '14.8 MB', type: 'zip', date: '2024-03-11' },
    { name: 'Requirements.docx', size: '1.2 MB', type: 'doc', date: '2024-03-12' }
  ];

  const milestones = order.milestones || [
    { name: 'Project Setup', completed: true, dueDate: '2024-03-15', progress: 100 },
    { name: 'Design Phase', completed: false, dueDate: '2024-03-30', progress: 60 },
    { name: 'Development', completed: false, dueDate: '2024-04-15', progress: 25 }
  ];

  // Inside your component, add these activity items
  const activityItems = [
    {
      id: 1,
      type: 'comment',
      user: 'John Doe',
      action: 'commented',
      content: 'The latest design updates look great! Ready for the next phase.',
      time: '2 hours ago',
      avatar: 'https://ui-avatars.com/api/?name=John+Doe'
    },
    {
      id: 2,
      type: 'milestone',
      user: 'Sarah Smith',
      action: 'completed',
      content: 'Design Phase',
      time: '5 hours ago',
      avatar: 'https://ui-avatars.com/api/?name=Sarah+Smith'
    },
    {
      id: 3,
      type: 'file',
      user: 'Mike Johnson',
      action: 'uploaded',
      content: 'design-mockups-v2.zip',
      time: '1 day ago',
      avatar: 'https://ui-avatars.com/api/?name=Mike+Johnson'
    },
    // Add more activity items as needed
  ];

  return (
    <div className="fixed inset-0 z-[70] overflow-hidden">
      {/* Backdrop with enhanced blur */}
      <div className="fixed inset-0 bg-gray-900/60 backdrop-blur-sm transition-opacity duration-300" />

      {/* Modal Container with Animation */}
      <div className="relative min-h-screen flex items-center justify-center p-4">
        <div className="relative w-full max-w-6xl bg-white rounded-2xl shadow-2xl 
                      transform transition-all duration-300 scale-100 opacity-100
                      animate-modalEntry overflow-hidden">
          {/* Enhanced Header */}
          <div className="flex items-center justify-between px-6 py-4 bg-white border-b 
                        border-gray-100 sticky top-0 z-10">
            <div className="flex items-center gap-4">
              <div className="flex flex-col">
                <h3 className="text-xl font-semibold text-gray-900">Order #{order.id || '001'}</h3>
                <div className="flex items-center gap-2 mt-1">
                  <span className={`px-2.5 py-0.5 text-xs font-medium rounded-full inline-flex 
                                items-center gap-1 ${
                    order.status === 'In Progress' ? 'bg-[#1dbf73]/10 text-[#1dbf73]' :
                    order.status === 'Late' ? 'bg-red-100 text-red-500' :
                    'bg-gray-100 text-gray-600'
                  }`}>
                    <span className="w-1.5 h-1.5 rounded-full bg-current" />
                    {order.status}
                  </span>
                  <span className="text-xs text-gray-500">
                    Last updated: {new Date().toLocaleDateString()}
                  </span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button className="p-2 text-gray-400 hover:text-gray-600 rounded-lg 
                              hover:bg-gray-100 transition-colors">
                <BellIcon className="w-5 h-5" />
              </button>
              <button 
                onClick={() => setIsEditing(!isEditing)}
                className="flex items-center gap-2 px-3 py-1.5 text-sm font-medium
                         text-gray-600 hover:text-gray-900 rounded-lg hover:bg-gray-100
                         transition-colors"
              >
                <PencilIcon className="w-4 h-4" />
                {isEditing ? 'Cancel Edit' : 'Edit Order'}
              </button>
              <button 
                onClick={onClose}
                className="p-2 text-gray-400 hover:text-gray-600 rounded-lg 
                         hover:bg-gray-100 transition-colors"
              >
                <XMarkIcon className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Tabs Navigation */}
          <div className="px-6 border-b border-gray-100">
            <div className="flex space-x-6">
              {[
                { id: 'details', name: 'Details' },
                { id: 'activity', name: 'Activity' },
                { id: 'files', name: 'Files & Attachments' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`py-3 text-sm font-medium border-b-2 transition-colors
                           ${activeTab === tab.id 
                             ? 'border-[#1dbf73] text-[#1dbf73]' 
                             : 'border-transparent text-gray-500 hover:text-gray-700'}`}
                >
                  {tab.name}
                </button>
              ))}
            </div>
          </div>

          {/* Modal Content with Tabs */}
          <div className="h-[calc(100vh-180px)] overflow-y-auto">
            {activeTab === 'details' && (
              <div className="grid grid-cols-3 gap-6 p-6">
                {/* Main Content - Left Side */}
                <div className="col-span-2 space-y-6">
                  {/* Project Info Card */}
                  <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                    <div className="p-6">
                      <div className="flex items-start justify-between">
                        <div>
                          <h2 className="text-2xl font-semibold text-gray-900">
                            {isEditing ? (
                              <input 
                                type="text"
                                defaultValue={order.projectTitle}
                                className="px-3 py-1.5 border border-gray-200 rounded-lg 
                                         focus:ring-2 focus:ring-[#1dbf73]/20 
                                         focus:border-[#1dbf73] w-full"
                              />
                            ) : order.projectTitle}
                          </h2>
                          <p className="text-sm text-gray-500 mt-1 flex items-center gap-2">
                            <CalendarIcon className="w-4 h-4" />
                            Created on {order.createdAt}
                          </p>
                        </div>
                        <div className="flex items-center gap-2">
                          <button className="p-2 text-gray-400 hover:text-gray-600 
                                         rounded-lg hover:bg-gray-100 transition-colors">
                            <DocumentDuplicateIcon className="w-5 h-5" />
                          </button>
                          <button className="p-2 text-gray-400 hover:text-gray-600 
                                         rounded-lg hover:bg-gray-100 transition-colors">
                            <ChatBubbleLeftIcon className="w-5 h-5" />
                          </button>
                        </div>
                      </div>

                      {/* Description */}
                      <div className="mt-6">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Description
                        </label>
                        {isEditing ? (
                          <textarea
                            defaultValue={order.description}
                            rows="4"
                            className="w-full px-4 py-2 border border-gray-200 rounded-lg 
                                     focus:ring-2 focus:ring-[#1dbf73]/20 
                                     focus:border-[#1dbf73]"
                          />
                        ) : (
                          <p className="text-gray-600 leading-relaxed">
                            {order.description}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Milestones Card */}
                  <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-lg font-semibold text-gray-900">Milestones</h3>
                        {isEditing && (
                          <button className="flex items-center gap-2 px-3 py-1.5 text-sm 
                                         text-[#1dbf73] hover:text-[#19a463] rounded-lg 
                                         hover:bg-[#1dbf73]/5 transition-colors">
                            <PlusIcon className="w-4 h-4" />
                            Add Milestone
                          </button>
                        )}
                      </div>

                      <div className="space-y-4">
                        {milestones.map((milestone, index) => (
                          <div 
                            key={index}
                            className="p-4 rounded-lg bg-gray-50 border border-gray-200"
                          >
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-3">
                                <div className={`w-6 h-6 rounded-full flex items-center 
                                              justify-center transition-colors
                                              ${milestone.completed 
                                                ? 'bg-[#1dbf73]/10 text-[#1dbf73]' 
                                                : 'bg-gray-100 text-gray-400'}`}>
                                  <CheckCircleIcon className="w-4 h-4" />
                                </div>
                                {isEditing ? (
                                  <input
                                    type="text"
                                    defaultValue={milestone.name}
                                    className="px-3 py-1.5 border border-gray-200 rounded-lg 
                                             focus:ring-2 focus:ring-[#1dbf73]/20 
                                             focus:border-[#1dbf73]"
                                  />
                                ) : (
                                  <span className="font-medium">{milestone.name}</span>
                                )}
                              </div>
                              <div className="flex items-center gap-3">
                                <div className="flex items-center gap-2">
                                  <ClockIcon className="w-4 h-4 text-gray-400" />
                                  <span className="text-sm text-gray-500">
                                    Due: {milestone.dueDate}
                                  </span>
                                </div>
                                {isEditing && (
                                  <button className="text-gray-400 hover:text-red-500 
                                                 transition-colors">
                                    <XMarkIcon className="w-4 h-4" />
                                  </button>
                                )}
                              </div>
                            </div>
                            {/* Progress Bar */}
                            <div className="mt-3">
                              <div className="flex items-center justify-between mb-1">
                                <span className="text-xs text-gray-500">Progress</span>
                                <span className="text-xs font-medium text-gray-700">
                                  {milestone.progress}%
                                </span>
                              </div>
                              <div className="w-full h-1.5 bg-gray-200 rounded-full overflow-hidden">
                                <div 
                                  className="h-full bg-[#1dbf73] rounded-full transition-all duration-300"
                                  style={{ width: `${milestone.progress}%` }}
                                />
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Sidebar - Right Side */}
                <div className="space-y-6">
                  {/* Client Info Card */}
                  <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                    <div className="p-5">
                      <h4 className="text-sm font-medium text-gray-700 mb-4">
                        Client Information
                      </h4>
                      <div className="flex items-center gap-4 mb-4">
                        <img
                          src={order.clientAvatar || 'https://ui-avatars.com/api/?name=John+Doe'}
                          alt={order.clientName}
                          className="w-12 h-12 rounded-full border-2 border-white 
                                   shadow-lg object-cover"
                        />
                        <div>
                          <p className="font-medium text-gray-900">{order.clientName}</p>
                          <p className="text-sm text-gray-500">{order.clientEmail}</p>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <button className="flex-1 px-4 py-2 text-sm font-medium text-[#1dbf73] 
                                       border border-[#1dbf73] rounded-lg hover:bg-[#1dbf73]/5 
                                       transition-colors">
                          Message
                        </button>
                        <button className="flex-1 px-4 py-2 text-sm font-medium text-white 
                                       bg-[#1dbf73] rounded-lg hover:bg-[#19a463] 
                                       transition-colors shadow-lg shadow-[#1dbf73]/25">
                          View Profile
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Order Details Card */}
                  <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                    <div className="p-5">
                      <h4 className="text-sm font-medium text-gray-700 mb-4">
                        Order Details
                      </h4>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between p-3 
                                    bg-gray-50 rounded-lg">
                          <div className="flex items-center gap-2 text-gray-600">
                            <CurrencyDollarIcon className="w-4 h-4" />
                            <span className="text-sm">Budget</span>
                          </div>
                          <span className="font-medium text-gray-900">{order.price}</span>
                        </div>
                        <div className="flex items-center justify-between p-3 
                                    bg-gray-50 rounded-lg">
                          <div className="flex items-center gap-2 text-gray-600">
                            <ClockIcon className="w-4 h-4" />
                            <span className="text-sm">Due Date</span>
                          </div>
                          <span className="font-medium text-gray-900">{order.dueDate}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Tags Card */}
                  <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                    <div className="p-5">
                      <h4 className="text-sm font-medium text-gray-700 mb-3">Tags</h4>
                      <div className="flex flex-wrap gap-2">
                        {(order.tags || ['UI/UX', 'Web Design', 'Development']).map((tag, index) => (
                          <span 
                            key={index}
                            className="px-3 py-1 text-sm bg-gray-100 text-gray-600 
                                     rounded-full hover:bg-gray-200 transition-colors 
                                     cursor-pointer"
                          >
                            {tag}
                          </span>
                        ))}
                        {isEditing && (
                          <button className="px-3 py-1 text-sm text-[#1dbf73] 
                                         hover:text-[#19a463] rounded-full border 
                                         border-dashed border-gray-300 
                                         hover:border-[#1dbf73] transition-colors">
                            + Add Tag
                          </button>
                        )}
                      </div>
                    </div>
                  </div>

                  {isEditing && (
                    <button className="w-full px-4 py-3 bg-[#1dbf73] text-white rounded-lg 
                                   hover:bg-[#19a463] shadow-lg shadow-[#1dbf73]/25 
                                   transition-all duration-200 font-medium">
                      Save Changes
                    </button>
                  )}
                </div>
              </div>
            )}

            {/* Activity Tab Content */}
            {activeTab === 'activity' && (
              <div className="p-6 max-w-3xl mx-auto">
                <div className="space-y-8">
                  {activityItems.map((item) => (
                    <div key={item.id} className="relative">
                      {/* Timeline connector */}
                      <div className="absolute left-6 top-10 bottom-0 w-px bg-gray-200" />
                      
                      <div className="flex gap-4">
                        <div className="relative">
                          <img
                            src={item.avatar}
                            alt={item.user}
                            className="w-12 h-12 rounded-full border-2 border-white shadow-lg"
                          />
                          <div className={`absolute -bottom-1 -right-1 w-6 h-6 rounded-full 
                                        flex items-center justify-center border-2 border-white
                                        ${item.type === 'comment' ? 'bg-blue-500' :
                                          item.type === 'milestone' ? 'bg-[#1dbf73]' :
                                          'bg-purple-500'}`}>
                            {item.type === 'comment' ? (
                              <ChatBubbleOvalLeftIcon className="w-3 h-3 text-white" />
                            ) : item.type === 'milestone' ? (
                              <CheckCircleIcon className="w-3 h-3 text-white" />
                            ) : (
                              <DocumentIcon className="w-3 h-3 text-white" />
                            )}
                          </div>
                        </div>
                        
                        <div className="flex-1">
                          <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
                            <div className="flex items-center justify-between mb-2">
                              <div>
                                <span className="font-medium text-gray-900">{item.user}</span>
                                <span className="text-gray-500 mx-2">·</span>
                                <span className="text-gray-500">{item.time}</span>
                              </div>
                            </div>
                            
                            <p className="text-gray-600">
                              {item.type === 'milestone' ? (
                                <span>Completed milestone: <strong>{item.content}</strong></span>
                              ) : item.type === 'file' ? (
                                <span>Uploaded new file: <strong>{item.content}</strong></span>
                              ) : (
                                item.content
                              )}
                            </p>
                            
                            {item.type === 'file' && (
                              <div className="mt-3 flex items-center gap-2">
                                <button className="px-3 py-1.5 text-sm text-[#1dbf73] hover:text-[#19a463] 
                                               rounded-lg hover:bg-[#1dbf73]/5 transition-colors
                                               flex items-center gap-2">
                                  <EyeIcon className="w-4 h-4" />
                                  Preview
                                </button>
                                <button className="px-3 py-1.5 text-sm text-[#1dbf73] hover:text-[#19a463] 
                                               rounded-lg hover:bg-[#1dbf73]/5 transition-colors
                                               flex items-center gap-2">
                                  <ArrowDownTrayIcon className="w-4 h-4" />
                                  Download
                                </button>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Files Tab Content */}
            {activeTab === 'files' && (
              <div className="p-6">
                {/* Files Header */}
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold text-gray-900">Project Files</h3>
                  <button className="px-4 py-2 bg-[#1dbf73] text-white rounded-lg 
                                  hover:bg-[#19a463] transition-colors shadow-lg 
                                  shadow-[#1dbf73]/25 flex items-center gap-2">
                    <PlusIcon className="w-5 h-5" />
                    Upload Files
                  </button>
                </div>

                {/* Files Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {attachments.map((file, index) => (
                    <div key={index} className="group relative bg-white rounded-xl border border-gray-200 
                                      overflow-hidden hover:border-[#1dbf73] transition-colors">
                      {/* File Preview */}
                      <div className="aspect-video bg-gray-50 flex items-center justify-center">
                        {file.type === 'pdf' ? (
                          <DocumentTextIcon className="w-16 h-16 text-red-400" />
                        ) : file.type === 'zip' ? (
                          <FolderIcon className="w-16 h-16 text-yellow-400" />
                        ) : (
                          <DocumentChartBarIcon className="w-16 h-16 text-blue-400" />
                        )}
                      </div>

                      {/* File Info */}
                      <div className="p-4">
                        <div className="flex items-start justify-between">
                          <div>
                            <h4 className="font-medium text-gray-900 mb-1">{file.name}</h4>
                            <p className="text-sm text-gray-500">
                              {file.size} · Uploaded {file.date}
                            </p>
                          </div>
                          <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                            <button className="p-1.5 text-gray-400 hover:text-gray-600 
                                           rounded-lg hover:bg-gray-100">
                              <EllipsisHorizontalIcon className="w-5 h-5" />
                            </button>
                          </div>
                        </div>

                        {/* Actions */}
                        <div className="mt-4 flex items-center gap-2">
                          <button className="flex-1 px-3 py-1.5 text-sm text-[#1dbf73] 
                                         border border-[#1dbf73] rounded-lg hover:bg-[#1dbf73]/5 
                                         transition-colors flex items-center justify-center gap-2">
                            <EyeIcon className="w-4 h-4" />
                            Preview
                          </button>
                          <button className="flex-1 px-3 py-1.5 text-sm text-white bg-[#1dbf73] 
                                         rounded-lg hover:bg-[#19a463] transition-colors 
                                         shadow-lg shadow-[#1dbf73]/25 
                                         flex items-center justify-center gap-2">
                            <ArrowDownTrayIcon className="w-4 h-4" />
                            Download
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}

                  {/* Upload Card */}
                  <div className="relative bg-gray-50 rounded-xl border-2 border-dashed border-gray-200 
                                hover:border-[#1dbf73] transition-colors p-6 flex flex-col 
                                items-center justify-center gap-3 cursor-pointer group">
                    <div className="w-16 h-16 rounded-full bg-[#1dbf73]/10 flex items-center 
                                 justify-center group-hover:bg-[#1dbf73]/20 transition-colors">
                      <PlusIcon className="w-8 h-8 text-[#1dbf73]" />
                    </div>
                    <div className="text-center">
                      <p className="font-medium text-gray-900">Upload New Files</p>
                      <p className="text-sm text-gray-500 mt-1">
                        Drag and drop or click to upload
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
