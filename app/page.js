"use client";
import { useState, useEffect, useRef } from 'react';
import {
  MagnifyingGlassIcon,
  FunnelIcon,
  PlusIcon,
  CalendarIcon,
  ClockIcon,
  CurrencyDollarIcon,
  ChatBubbleLeftIcon,
  BellIcon,
  UserCircleIcon,
  ChevronDownIcon,
  TagIcon,
  DocumentDuplicateIcon,
  StarIcon,
  ArrowTrendingUpIcon,
  CheckCircleIcon,
  ExclamationCircleIcon,
  Bars3Icon,
  HomeIcon,
  FolderIcon,
  ChartBarIcon,
  CogIcon,
  QuestionMarkCircleIcon,
  ArrowLeftOnRectangleIcon
} from '@heroicons/react/24/outline';

export default function OrdersPage() {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [orders] = useState([
    {
      id: 1,
      clientName: "John Smith",
      clientAvatar: "https://ui-avatars.com/api/?name=John+Smith",
      projectTitle: "E-commerce Website",
      dueDate: "2024-04-15",
      status: "In Progress",
      price: "$1,500",
      priority: "High",
      messages: 3,
      timeLeft: "2 days left",
      description: "Full e-commerce website with payment integration and responsive design",
      revision: 1,
      progress: 65,
      tags: ["React", "Node.js", "MongoDB"],
      attachments: 3,
      milestones: [
        { name: "Design", completed: true },
        { name: "Frontend", completed: true },
        { name: "Backend", completed: false },
        { name: "Testing", completed: false }
      ],
      rating: 4.8,
      urgent: true
    },
    {
      id: 2,
      clientName: "Sarah Johnson",
      clientAvatar: "https://ui-avatars.com/api/?name=Sarah+Johnson",
      projectTitle: "Portfolio Site",
      dueDate: "2024-04-20",
      status: "Pending",
      price: "$800",
      priority: "Medium",
      messages: 1,
      timeLeft: "5 days left",
      description: "Personal portfolio website with blog integration",
      revision: 0,
      progress: 25,
      tags: ["React", "Tailwind"],
      attachments: 2,
      milestones: [
        { name: "Design", completed: true },
        { name: "Development", completed: false },
        { name: "Testing", completed: false }
      ],
      rating: 4.5,
      urgent: false
    },
    {
      id: 3,
      clientName: "Tech Solutions Inc",
      clientAvatar: "https://ui-avatars.com/api/?name=Tech+Solutions",
      projectTitle: "Company Website Redesign",
      dueDate: "2024-05-01",
      status: "Review",
      price: "$2,500",
      priority: "High",
      messages: 5,
      timeLeft: "12 days left",
      description: "Complete company website redesign with modern UI/UX",
      revision: 2,
      progress: 85,
      tags: ["Next.js", "TypeScript", "Prisma"],
      attachments: 6,
      milestones: [
        { name: "Wireframes", completed: true },
        { name: "Design", completed: true },
        { name: "Development", completed: true },
        { name: "Testing", completed: false }
      ],
      rating: 4.9,
      urgent: false
    }
  ]);

  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const [notifications] = useState([
    {
      id: 1,
      title: "New order received",
      message: "John Smith placed a new order",
      time: "5 minutes ago",
      unread: true
    },
    {
      id: 2,
      title: "Milestone completed",
      message: "Frontend development completed for E-commerce project",
      time: "1 hour ago",
      unread: true
    },
    {
      id: 3,
      title: "Payment received",
      message: "Payment of $1,500 received from Tech Solutions Inc",
      time: "2 hours ago",
      unread: false
    }
  ]);

  const notificationsRef = useRef(null);
  const profileRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (notificationsRef.current && !notificationsRef.current.contains(event.target)) {
        setIsNotificationsOpen(false);
      }
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setIsProfileOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const getStatusColor = (status) => {
    switch (status) {
      case "In Progress": return "bg-[#1dbf73] text-white";
      case "Pending": return "bg-yellow-100 text-yellow-800";
      case "Review": return "bg-purple-100 text-purple-800";
      case "Completed": return "bg-gray-100 text-gray-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case "High": return "bg-red-100 text-red-800";
      case "Medium": return "bg-orange-100 text-orange-800";
      case "Low": return "bg-green-100 text-green-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Enhanced Header */}
      <header className="bg-white border-b border-gray-200 fixed w-full z-[50]">
        {/* Top Bar */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-[51]">
          <div className="flex justify-between h-16">
            {/* Left Section */}
            <div className="flex items-center">
              <button className="p-2 rounded-md text-gray-400 lg:hidden">
                <Bars3Icon className="h-6 w-6" />
              </button>
              <div className="flex items-center gap-3">
                <span className="text-2xl font-bold text-[#1dbf73]">DevOrders</span>
                <div className="hidden lg:flex h-6 w-px bg-gray-200"></div>
                <nav className="hidden lg:flex items-center gap-6">
                  <a href="#" className="flex items-center gap-2 text-[#1dbf73] px-3 py-2 text-sm font-medium">
                    <HomeIcon className="w-4 h-4" />
                    Dashboard
                  </a>
                  <a href="#" className="flex items-center gap-2 text-gray-600 hover:text-[#1dbf73] px-3 py-2 text-sm font-medium">
                    <FolderIcon className="w-4 h-4" />
                    Projects
                  </a>
                  <a href="#" className="flex items-center gap-2 text-gray-600 hover:text-[#1dbf73] px-3 py-2 text-sm font-medium">
                    <ChartBarIcon className="w-4 h-4" />
                    Analytics
                  </a>
                </nav>
              </div>
            </div>

            {/* Right Section */}
            <div className="flex items-center gap-4">
              {/* Search */}
              <div className="hidden md:block">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search projects..."
                    className="w-72 pl-10 pr-4 py-2 border border-gray-300 rounded-full 
                             focus:outline-none focus:border-[#1dbf73] focus:ring-2 
                             focus:ring-[#1dbf73]/20 text-sm"
                  />
                  <MagnifyingGlassIcon className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
                </div>
              </div>

              {/* Notifications */}
              <div className="relative" ref={notificationsRef}>
                <button 
                  className="relative p-2 text-gray-600 hover:text-[#1dbf73] rounded-full 
                           hover:bg-[#1dbf73]/10 transition-colors duration-200"
                  onClick={() => setIsNotificationsOpen(!isNotificationsOpen)}
                >
                  <BellIcon className="w-6 h-6" />
                  <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                </button>

                {/* Notifications Dropdown - Added z-index */}
                {isNotificationsOpen && (
                  <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg py-2 border border-gray-200 z-[60]">
                    <div className="px-4 py-2 border-b border-gray-100">
                      <h3 className="text-sm font-semibold text-gray-900">Notifications</h3>
                    </div>
                    {notifications.map((notification) => (
                      <div 
                        key={notification.id} 
                        className={`px-4 py-3 hover:bg-gray-50 cursor-pointer ${
                          notification.unread ? 'bg-blue-50/50' : ''
                        }`}
                      >
                        <p className="text-sm font-medium text-gray-900">{notification.title}</p>
                        <p className="text-sm text-gray-500">{notification.message}</p>
                        <p className="text-xs text-gray-400 mt-1">{notification.time}</p>
                      </div>
                    ))}
                    <div className="px-4 py-2 border-t border-gray-100">
                      <button className="text-sm text-[#1dbf73] hover:text-[#19a463] font-medium">
                        View all notifications
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* Profile Dropdown */}
              <div className="relative" ref={profileRef}>
                <button 
                  className="flex items-center gap-2 p-2 rounded-full hover:bg-gray-100"
                  onClick={() => setIsProfileOpen(!isProfileOpen)}
                >
                  <img
                    src="https://ui-avatars.com/api/?name=John+Doe&background=1dbf73&color=fff"
                    alt="Profile"
                    className="w-8 h-8 rounded-full"
                  />
                  <ChevronDownIcon className="w-4 h-4 text-gray-600" />
                </button>

                {/* Profile Menu - Added z-index */}
                {isProfileOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 border border-gray-200 z-[60]">
                    <div className="px-4 py-2 border-b border-gray-100">
                      <p className="text-sm font-medium text-gray-900">John Doe</p>
                      <p className="text-xs text-gray-500">john@example.com</p>
                    </div>
                    <a href="#" className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      <UserCircleIcon className="w-4 h-4" />
                      Profile
                    </a>
                    <a href="#" className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      <CogIcon className="w-4 h-4" />
                      Settings
                    </a>
                    <a href="#" className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      <QuestionMarkCircleIcon className="w-4 h-4" />
                      Help Center
                    </a>
                    <div className="border-t border-gray-100 mt-2">
                      <a href="#" className="flex items-center gap-2 px-4 py-2 text-sm text-red-600 hover:bg-gray-100">
                        <ArrowLeftOnRectangleIcon className="w-4 h-4" />
                        Sign out
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Sub Navigation - Removed z-index */}
        <div className="border-t border-gray-200 bg-white/95 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-12">
              <div className="flex items-center space-x-4 text-sm">
                <span className="text-gray-500">Active Orders: 12</span>
                <span className="text-gray-500">Completed: 45</span>
                <span className="text-gray-500">Total Revenue: $24,500</span>
              </div>
              <div className="flex items-center space-x-4">
                <button className="text-sm text-gray-600 hover:text-[#1dbf73]">Export Data</button>
                <button className="text-sm text-gray-600 hover:text-[#1dbf73]">Print Report</button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content - Adjusted spacing */}
      <main className="pt-[104px]"> {/* Adjusted to account for exact header height (64px + 40px) */}
        <div className="px-8 py-6"> {/* Adjusted padding */}
          <div className="max-w-7xl mx-auto">
            {/* Stats Section */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6"> {/* Reduced bottom margin */}
              {[
                { title: "Active Orders", value: "12", icon: DocumentDuplicateIcon, color: "text-blue-500" },
                { title: "Completed Today", value: "4", icon: CheckCircleIcon, color: "text-green-500" },
                { title: "Urgent", value: "3", icon: ExclamationCircleIcon, color: "text-red-500" },
                { title: "Revenue", value: "$12,450", icon: ArrowTrendingUpIcon, color: "text-purple-500" }
              ].map((stat, index) => (
                <div key={index} className="bg-white rounded-xl shadow-sm p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-500">{stat.title}</p>
                      <p className="text-2xl font-semibold mt-1">{stat.value}</p>
                    </div>
                    <stat.icon className={`w-8 h-8 ${stat.color}`} />
                  </div>
                </div>
              ))}
            </div>

            {/* Filters Section */}
            <div className="bg-white rounded-xl shadow-sm p-6 mb-6"> {/* Reduced bottom margin */}
              <div className="flex items-center gap-4 mb-4">
                <button
                  className={`px-4 py-2 rounded-full ${
                    selectedFilter === 'all' ? 'bg-[#1dbf73] text-white' : 'bg-gray-100'
                  }`}
                  onClick={() => setSelectedFilter('all')}
                >
                  All Orders
                </button>
                <button
                  className={`px-4 py-2 rounded-full ${
                    selectedFilter === 'active' ? 'bg-[#1dbf73] text-white' : 'bg-gray-100'
                  }`}
                  onClick={() => setSelectedFilter('active')}
                >
                  Active
                </button>
                <button
                  className={`px-4 py-2 rounded-full ${
                    selectedFilter === 'late' ? 'bg-[#1dbf73] text-white' : 'bg-gray-100'
                  }`}
                  onClick={() => setSelectedFilter('late')}
                >
                  Late
                </button>
                <button
                  className={`px-4 py-2 rounded-full ${
                    selectedFilter === 'completed' ? 'bg-[#1dbf73] text-white' : 'bg-gray-100'
                  }`}
                  onClick={() => setSelectedFilter('completed')}
                >
                  Completed
                </button>
              </div>
              
              <div className="flex justify-between items-center">
                <div className="flex gap-4">
                  <button className="flex items-center gap-2 text-gray-600 hover:text-[#1dbf73]">
                    <FunnelIcon className="w-5 h-5" /> Filter
                  </button>
                  <button className="flex items-center gap-2 text-gray-600 hover:text-[#1dbf73]">
                    <CalendarIcon className="w-5 h-5" /> Date Range
                  </button>
                </div>
                <button className="flex items-center gap-2 bg-[#1dbf73] text-white px-4 py-2 rounded-lg hover:bg-[#19a463]">
                  <PlusIcon className="w-5 h-5" /> New Order
                </button>
              </div>
            </div>

            {/* Orders Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {orders.map((order) => (
                <div key={order.id} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="p-6">
                    {/* Header */}
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex gap-3">
                        <img 
                          src={order.clientAvatar} 
                          alt={order.clientName} 
                          className="w-10 h-10 rounded-full"
                        />
                        <div>
                          <h3 className="font-semibold text-lg text-gray-900">{order.projectTitle}</h3>
                          <p className="text-sm text-gray-500">{order.clientName}</p>
                        </div>
                      </div>
                      {order.urgent && (
                        <span className="px-2 py-1 bg-red-100 text-red-600 text-xs font-medium rounded-full">
                          Urgent
                        </span>
                      )}
                    </div>

                    {/* Progress Bar */}
                    <div className="mb-4">
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-sm text-gray-500">Progress</span>
                        <span className="text-sm font-medium text-[#1dbf73]">{order.progress}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-[#1dbf73] h-2 rounded-full transition-all duration-300"
                          style={{ width: `${order.progress}%` }}
                        ></div>
                      </div>
                    </div>

                    {/* Tags */}
                    {order.tags && (
                      <div className="flex flex-wrap gap-2 mb-4">
                        {order.tags.map((tag, index) => (
                          <span key={index} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full flex items-center gap-1">
                            <TagIcon className="w-3 h-3" />
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Milestones */}
                    {order.milestones && (
                      <div className="mb-4">
                        <div className="flex items-center gap-2 mb-2">
                          <h4 className="text-sm font-medium text-gray-700">Milestones</h4>
                          <span className="text-xs text-gray-500">
                            ({order.milestones.filter(m => m.completed).length}/{order.milestones.length})
                          </span>
                        </div>
                        <div className="flex gap-1">
                          {order.milestones.map((milestone, index) => (
                            <div 
                              key={index}
                              className={`flex-1 h-1 rounded-full ${milestone.completed ? 'bg-[#1dbf73]' : 'bg-gray-200'}`}
                            ></div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Footer */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <div className="flex items-center gap-4">
                        {order.rating && (
                          <div className="flex items-center gap-1">
                            <StarIcon className="w-4 h-4 text-yellow-400" />
                            <span className="text-sm text-gray-600">{order.rating}</span>
                          </div>
                        )}
                        <div className="flex items-center gap-1">
                          <ClockIcon className="w-4 h-4 text-[#1dbf73]" />
                          <span className="text-sm text-gray-600">{order.timeLeft}</span>
                        </div>
                      </div>
                      <button className="text-sm text-[#1dbf73] hover:text-[#19a463] font-medium">
                        View Details →
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
