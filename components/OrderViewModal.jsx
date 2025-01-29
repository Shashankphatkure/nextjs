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
} from '@heroicons/react/24/outline';

export default function OrderViewModal({ order, onClose }) {
  const [isEditing, setIsEditing] = useState(false);

  // Add default/sample data for attachments if they don't exist
  const attachments = order.attachments || [
    { name: 'Project Brief.pdf', size: '2.4 MB', type: 'pdf' },
    { name: 'Design Assets.zip', size: '14.8 MB', type: 'zip' },
    { name: 'Requirements.docx', size: '1.2 MB', type: 'doc' }
  ];

  return (
    <div className="fixed inset-0 z-[70] overflow-y-auto">
      {/* Backdrop */}
      <div className="fixed inset-0 bg-gray-900/50 backdrop-blur-sm transition-opacity" />

      {/* Modal */}
      <div className="relative min-h-screen flex items-center justify-center p-4">
        <div className="relative w-full max-w-6xl bg-white rounded-2xl shadow-xl 
                      transform transition-all">
          {/* Modal Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
            <div className="flex items-center gap-4">
              <h3 className="text-xl font-semibold text-gray-900">Order Details</h3>
              <span className={`px-3 py-1 text-sm rounded-full ${
                order.status === 'In Progress' ? 'bg-[#1dbf73]/10 text-[#1dbf73]' :
                order.status === 'Late' ? 'bg-red-100 text-red-500' :
                'bg-gray-100 text-gray-600'
              }`}>
                {order.status}
              </span>
            </div>
            <div className="flex items-center gap-3">
              <button 
                onClick={() => setIsEditing(!isEditing)}
                className="flex items-center gap-2 px-3 py-1.5 text-sm text-gray-600 
                         hover:text-gray-900 rounded-lg hover:bg-gray-100"
              >
                <PencilIcon className="w-4 h-4" />
                {isEditing ? 'Cancel Edit' : 'Edit Order'}
              </button>
              <button 
                onClick={onClose}
                className="text-gray-400 hover:text-gray-500 transition-colors"
              >
                <XMarkIcon className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Modal Content */}
          <div className="grid grid-cols-3 gap-6 p-6">
            {/* Main Content - Left Side */}
            <div className="col-span-2 space-y-6">
              {/* Project Info */}
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <div>
                    <h2 className="text-2xl font-semibold text-gray-900">
                      {isEditing ? (
                        <input 
                          type="text"
                          defaultValue={order.projectTitle}
                          className="px-3 py-1 border border-gray-200 rounded-lg focus:ring-2 
                                   focus:ring-[#1dbf73]/20 focus:border-[#1dbf73]"
                        />
                      ) : order.projectTitle}
                    </h2>
                    <p className="text-sm text-gray-500 mt-1">Created on {order.createdAt}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100">
                      <DocumentDuplicateIcon className="w-5 h-5" />
                    </button>
                    <button className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100">
                      <ChatBubbleLeftIcon className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                {/* Description */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Description
                  </label>
                  {isEditing ? (
                    <textarea
                      defaultValue={order.description}
                      rows="4"
                      className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 
                               focus:ring-[#1dbf73]/20 focus:border-[#1dbf73]"
                    />
                  ) : (
                    <p className="text-gray-600">{order.description}</p>
                  )}
                </div>

                {/* Milestones */}
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <label className="block text-sm font-medium text-gray-700">
                      Milestones
                    </label>
                    {isEditing && (
                      <button className="text-sm text-[#1dbf73] hover:text-[#19a463]">
                        + Add Milestone
                      </button>
                    )}
                  </div>
                  <div className="space-y-3">
                    {order.milestones?.map((milestone, index) => (
                      <div 
                        key={index}
                        className="p-4 border border-gray-200 rounded-lg bg-gray-50/50"
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className={`w-6 h-6 rounded-full flex items-center justify-center
                                          ${milestone.completed ? 
                                            'bg-[#1dbf73]/10 text-[#1dbf73]' : 
                                            'bg-gray-100 text-gray-400'
                                          }`}>
                              <CheckCircleIcon className="w-4 h-4" />
                            </div>
                            {isEditing ? (
                              <input
                                type="text"
                                defaultValue={milestone.name}
                                className="px-3 py-1 border border-gray-200 rounded-lg focus:ring-2 
                                         focus:ring-[#1dbf73]/20 focus:border-[#1dbf73]"
                              />
                            ) : (
                              <span className="font-medium">{milestone.name}</span>
                            )}
                          </div>
                          <div className="flex items-center gap-3">
                            <span className="text-sm text-gray-500">
                              Due: {milestone.dueDate}
                            </span>
                            {isEditing && (
                              <button className="text-gray-400 hover:text-red-500">
                                <XMarkIcon className="w-4 h-4" />
                              </button>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Attachments */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Attachments
                  </label>
                  <div className="border border-gray-200 rounded-lg divide-y">
                    {attachments.length > 0 ? (
                      attachments.map((attachment, index) => (
                        <div 
                          key={index}
                          className="flex items-center justify-between p-3 hover:bg-gray-50"
                        >
                          <div className="flex items-center gap-3">
                            <PaperClipIcon className="w-4 h-4 text-gray-400" />
                            <div>
                              <span className="text-sm text-gray-700">{attachment.name}</span>
                              {attachment.size && (
                                <span className="text-xs text-gray-500 ml-2">({attachment.size})</span>
                              )}
                            </div>
                          </div>
                          <button className="text-sm text-[#1dbf73] hover:text-[#19a463]">
                            Download
                          </button>
                        </div>
                      ))
                    ) : (
                      <div className="p-4 text-center">
                        <PaperClipIcon className="w-6 h-6 text-gray-300 mx-auto mb-2" />
                        <p className="text-sm text-gray-500">No attachments yet</p>
                      </div>
                    )}
                    
                    {isEditing && (
                      <div className="p-3 bg-gray-50">
                        <button className="flex items-center gap-2 text-sm text-[#1dbf73] hover:text-[#19a463]">
                          <PlusIcon className="w-4 h-4" />
                          Add Attachment
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar - Right Side */}
            <div className="space-y-6">
              {/* Client Info */}
              <div className="p-4 border border-gray-200 rounded-lg bg-gray-50/50">
                <h4 className="text-sm font-medium text-gray-700 mb-3">Client Information</h4>
                <div className="flex items-center gap-3 mb-4">
                  <img
                    src={order.clientAvatar}
                    alt={order.clientName}
                    className="w-10 h-10 rounded-full"
                  />
                  <div>
                    <p className="font-medium">{order.clientName}</p>
                    <p className="text-sm text-gray-500">{order.clientEmail}</p>
                  </div>
                </div>
                <button className="w-full px-4 py-2 text-sm text-[#1dbf73] border border-[#1dbf73] 
                                 rounded-lg hover:bg-[#1dbf73]/5">
                  Contact Client
                </button>
              </div>

              {/* Order Details */}
              <div className="p-4 border border-gray-200 rounded-lg">
                <h4 className="text-sm font-medium text-gray-700 mb-3">Order Details</h4>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-gray-600">
                      <CurrencyDollarIcon className="w-4 h-4" />
                      <span className="text-sm">Budget</span>
                    </div>
                    <span className="font-medium">{order.price}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-gray-600">
                      <ClockIcon className="w-4 h-4" />
                      <span className="text-sm">Due Date</span>
                    </div>
                    <span className="font-medium">{order.dueDate}</span>
                  </div>
                </div>
              </div>

              {/* Tags */}
              <div>
                <h4 className="text-sm font-medium text-gray-700 mb-2">Tags</h4>
                <div className="flex flex-wrap gap-2">
                  {order.tags?.map((tag, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 text-sm bg-gray-100 text-gray-600 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {isEditing && (
                <button className="w-full px-4 py-2 bg-[#1dbf73] text-white rounded-lg 
                                 hover:bg-[#19a463] shadow-lg shadow-[#1dbf73]/25">
                  Save Changes
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
