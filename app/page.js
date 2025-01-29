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
  ArrowLeftOnRectangleIcon,
  XMarkIcon,
  ArrowRightIcon,
  PaperClipIcon,
  TrashIcon
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

  const [isNewOrderModalOpen, setIsNewOrderModalOpen] = useState(false);

  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  const filteredOrders = orders.filter(order => 
    order.projectTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
    order.clientName.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
              <div className="relative">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search orders, clients..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onFocus={() => setIsSearchFocused(true)}
                    className="w-72 pl-10 pr-4 py-2 border border-gray-300 rounded-full 
                              focus:outline-none focus:border-[#1dbf73] focus:ring-2 
                              focus:ring-[#1dbf73]/20 text-sm"
                  />
                  <MagnifyingGlassIcon className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
                  
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery('')}
                      className="absolute right-3 top-2.5 text-gray-400 hover:text-gray-600"
                    >
                      <XMarkIcon className="w-4 h-4" />
                    </button>
                  )}
                </div>

                {/* Search Suggestions Dropdown */}
                {isSearchFocused && (
                  <div className="absolute mt-2 w-[400px] bg-white rounded-xl shadow-lg border border-gray-100 
                                  overflow-hidden z-50">
                    {/* Search Stats */}
                    <div className="px-4 py-2 bg-gray-50/50 border-b border-gray-100">
                      <p className="text-xs text-gray-500">
                        {searchQuery ? (
                          <>Found {filteredOrders.length} results</>
                        ) : (
                          'Recent Searches'
                        )}
                      </p>
                    </div>

                    {/* Search Results */}
                    <div className="max-h-[400px] overflow-y-auto">
                      {searchQuery ? (
                        filteredOrders.length > 0 ? (
                          filteredOrders.map((order) => (
                            <div
                              key={order.id}
                              className="px-4 py-3 hover:bg-gray-50 cursor-pointer transition-colors"
                            >
                              <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                  <div className={`w-2 h-2 rounded-full ${
                                    order.status === 'In Progress' ? 'bg-[#1dbf73]' :
                                    order.status === 'Late' ? 'bg-red-500' :
                                    'bg-gray-300'
                                  }`} />
                                  <div>
                                    <h4 className="text-sm font-medium text-gray-900">
                                      {order.projectTitle}
                                    </h4>
                                    <p className="text-xs text-gray-500 mt-0.5">
                                      {order.clientName} • Due {order.dueDate}
                                    </p>
                                  </div>
                                </div>
                                <span className={`text-xs px-2 py-1 rounded-full ${
                                  order.status === 'In Progress' ? 'bg-[#1dbf73]/10 text-[#1dbf73]' :
                                  order.status === 'Late' ? 'bg-red-100 text-red-500' :
                                  'bg-gray-100 text-gray-600'
                                }`}>
                                  {order.status}
                                </span>
                              </div>
                              {order.description && (
                                <p className="text-xs text-gray-500 mt-1 line-clamp-1">
                                  {order.description}
                                </p>
                              )}
                            </div>
                          ))
                        ) : (
                          <div className="px-4 py-8 text-center">
                            <FolderIcon className="w-12 h-12 text-gray-300 mx-auto mb-3" />
                            <p className="text-sm text-gray-500">No orders found</p>
                            <p className="text-xs text-gray-400 mt-1">
                              Try adjusting your search terms
                            </p>
                          </div>
                        )
                      ) : (
                        // Recent/Suggested Searches
                        <div>
                          {['Website Development', 'Mobile App', 'Logo Design'].map((term) => (
                            <div
                              key={term}
                              className="px-4 py-2 hover:bg-gray-50 cursor-pointer 
                                       transition-colors flex items-center gap-2"
                              onClick={() => setSearchQuery(term)}
                            >
                              <ClockIcon className="w-4 h-4 text-gray-400" />
                              <span className="text-sm text-gray-600">{term}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Quick Actions */}
                    <div className="px-4 py-2 bg-gray-50/50 border-t border-gray-100">
                      <div className="flex items-center justify-between">
                        <button 
                          onClick={() => setIsNewOrderModalOpen(true)}
                          className="text-sm text-[#1dbf73] hover:text-[#19a463] 
                                   flex items-center gap-1"
                        >
                          <PlusIcon className="w-4 h-4" />
                          Create New Order
                        </button>
                        <button 
                          className="text-xs text-gray-500 hover:text-gray-700"
                          onClick={() => setSearchQuery('')}
                        >
                          Clear Search
                        </button>
                      </div>
                    </div>
                  </div>
                )}
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

                {/* Enhanced Notifications Menu */}
                {isNotificationsOpen && (
                  <div className="absolute right-0 mt-2 w-80 bg-white rounded-xl shadow-lg border border-gray-100 z-[60]
                                  overflow-hidden transform transition-all duration-200 origin-top">
                    {/* Header */}
                    <div className="px-4 py-3 border-b border-gray-100 flex items-center justify-between bg-gray-50">
                      <h3 className="text-sm font-semibold text-gray-900">Notifications</h3>
                      <span className="px-2 py-1 text-xs font-medium text-[#1dbf73] bg-[#1dbf73]/10 rounded-full">
                        5 new
                      </span>
                    </div>

                    {/* Notifications List */}
                    <div className="max-h-[380px] overflow-y-auto">
                      {notifications.map((notification) => (
                        <div 
                          key={notification.id} 
                          className={`px-4 py-3 hover:bg-gray-50 cursor-pointer transition-colors duration-200
                                     ${notification.unread ? 'bg-[#1dbf73]/5' : ''} relative group`}
                        >
                          {notification.unread && (
                            <span className="absolute left-2 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-[#1dbf73] rounded-full"></span>
                          )}
                          <div className="flex gap-3">
                            <div className={`mt-0.5 p-2 rounded-lg ${
                              notification.unread ? 'bg-[#1dbf73]/10 text-[#1dbf73]' : 'bg-gray-100 text-gray-500'
                            }`}>
                              {/* Icon based on notification type */}
                              <BellIcon className="w-4 h-4" />
                            </div>
                            <div className="flex-1">
                              <p className={`text-sm font-medium ${notification.unread ? 'text-gray-900' : 'text-gray-600'}`}>
                                {notification.title}
                              </p>
                              <p className="text-sm text-gray-500 line-clamp-2">{notification.message}</p>
                              <p className="text-xs text-gray-400 mt-1 flex items-center gap-2">
                                <ClockIcon className="w-3 h-3" />
                                {notification.time}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Footer */}
                    <div className="px-4 py-3 border-t border-gray-100 bg-gray-50">
                      <div className="flex items-center justify-between">
                        <button className="text-sm text-[#1dbf73] hover:text-[#19a463] font-medium 
                                         transition-colors duration-200">
                          View all notifications
                        </button>
                        <button className="text-xs text-gray-500 hover:text-gray-700 
                                         transition-colors duration-200">
                          Mark all as read
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Profile Dropdown */}
              <div className="relative" ref={profileRef}>
                <button 
                  className="flex items-center gap-3 p-1.5 pl-3 rounded-full hover:bg-gray-100
                             transition-all duration-200 group"
                  onClick={() => setIsProfileOpen(!isProfileOpen)}
                >
                  <div className="flex items-center gap-3">
                    <div className="flex flex-col items-end text-right">
                      <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900">John Doe</span>
                      <span className="text-xs text-gray-500">Web Developer</span>
                    </div>
                    <div className="relative">
                      <img
                        src="https://ui-avatars.com/api/?name=John+Doe&background=1dbf73&color=fff"
                        alt="Profile"
                        className="w-9 h-9 rounded-full border-2 border-white shadow-sm"
                      />
                      <div className="absolute bottom-0 right-0 w-3 h-3 bg-[#1dbf73] border-2 border-white rounded-full"></div>
                    </div>
                    <ChevronDownIcon className="w-4 h-4 text-gray-500 group-hover:text-gray-700" />
                  </div>
                </button>

                {/* Enhanced Profile Dropdown */}
                {isProfileOpen && (
                  <div className="absolute right-0 mt-2 w-64 bg-white rounded-xl shadow-lg border border-gray-100 z-[60]
                                  overflow-hidden transform transition-all duration-200 origin-top">
                    {/* User Profile Header */}
                    <div className="px-5 py-4 border-b border-gray-100 bg-gray-50/50">
                      <div className="flex items-center gap-4">
                        <div className="relative">
                          <img
                            src="https://ui-avatars.com/api/?name=John+Doe&background=1dbf73&color=fff"
                            alt="Profile"
                            className="w-12 h-12 rounded-xl border-2 border-white shadow-sm"
                          />
                          <div className="absolute -bottom-1 -right-1">
                            <span className="bg-[#1dbf73] text-white text-xs px-2 py-0.5 rounded-full font-medium">
                              Online
                            </span>
                          </div>
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold text-gray-900">John Doe</h4>
                          <p className="text-xs text-gray-500">john@example.com</p>
                        </div>
                      </div>
                    </div>

                    {/* Menu Items */}
                    <div className="p-2">
                      <div className="space-y-1">
                        {[
                          { name: 'Dashboard', icon: HomeIcon },
                          { name: 'Active Orders', icon: FolderIcon, badge: '12' },
                          { name: 'Messages', icon: ChatBubbleLeftIcon, badge: '5' },
                          { name: 'Profile Settings', icon: CogIcon },
                        ].map((item) => (
                          <a
                            key={item.name}
                            href="#"
                            className="flex items-center justify-between px-3 py-2 text-sm text-gray-600 
                                     rounded-lg hover:bg-gray-50 hover:text-gray-900 
                                     transition-colors duration-200 group"
                          >
                            <div className="flex items-center gap-2">
                              <item.icon className="w-4 h-4 group-hover:text-[#1dbf73] 
                                                  transition-colors duration-200" />
                              <span>{item.name}</span>
                            </div>
                            {item.badge && (
                              <span className="px-2 py-0.5 text-xs font-medium bg-[#1dbf73]/10 
                                             text-[#1dbf73] rounded-full">
                                {item.badge}
                              </span>
                            )}
                          </a>
                        ))}
                      </div>
                    </div>

                    {/* Footer Actions */}
                    <div className="p-2 border-t border-gray-100 bg-gray-50/50">
                      <div className="space-y-1">
                        <button className="flex items-center gap-2 w-full px-3 py-2 text-sm 
                                         text-gray-600 rounded-lg hover:bg-gray-100/80 
                                         transition-colors duration-200">
                          <QuestionMarkCircleIcon className="w-4 h-4" />
                          Help & Support
                        </button>
                        <button className="flex items-center gap-2 w-full px-3 py-2 text-sm 
                                         text-red-600 rounded-lg hover:bg-red-50 
                                         transition-colors duration-200">
                          <ArrowLeftOnRectangleIcon className="w-4 h-4" />
                          Sign out
                        </button>
                      </div>
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
            {/* Enhanced Stats Section */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
              {[
                { 
                  title: "Active Orders", 
                  value: "12", 
                  icon: DocumentDuplicateIcon, 
                  color: "text-blue-500",
                  bgColor: "bg-blue-500",
                  lightBg: "bg-blue-50"
                },
                { 
                  title: "Completed Today", 
                  value: "4", 
                  icon: CheckCircleIcon, 
                  color: "text-[#1dbf73]",
                  bgColor: "bg-[#1dbf73]",
                  lightBg: "bg-[#1dbf73]/10"
                },
                { 
                  title: "Urgent", 
                  value: "3", 
                  icon: ExclamationCircleIcon, 
                  color: "text-rose-500",
                  bgColor: "bg-rose-500",
                  lightBg: "bg-rose-50"
                },
                { 
                  title: "Revenue", 
                  value: "$12,450", 
                  icon: ArrowTrendingUpIcon, 
                  color: "text-violet-500",
                  bgColor: "bg-violet-500",
                  lightBg: "bg-violet-50"
                }
              ].map((stat, index) => (
                <div 
                  key={index} 
                  className="relative bg-white rounded-xl shadow-sm p-6 border border-gray-100 
                             hover:shadow-lg transition-all duration-300 group overflow-hidden"
                >
                  {/* Background Decoration */}
                  <div 
                    className={`absolute right-0 top-0 w-24 h-24 ${stat.lightBg} rounded-full 
                                blur-2xl opacity-20 -mr-6 -mt-6 transition-all duration-300
                                group-hover:opacity-40`}
                  />

                  <div className="relative flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-500 mb-1 group-hover:text-gray-700 
                                  transition-colors duration-200">
                        {stat.title}
                      </p>
                      <p className={`text-2xl font-semibold ${stat.color} transition-colors duration-200`}>
                        {stat.value}
                      </p>
                    </div>
                    <div 
                      className={`p-3 rounded-xl ${stat.lightBg} ${stat.color} 
                                group-hover:scale-110 transition-transform duration-200`}
                    >
                      <stat.icon className="w-6 h-6" />
                    </div>
                  </div>

                  {/* Optional Subtle Progress Bar */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-50">
                    <div 
                      className={`h-full ${stat.bgColor} opacity-10 group-hover:opacity-20 
                                transition-all duration-300`}
                      style={{ width: '65%' }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Enhanced Filters Section */}
            <div className="bg-white rounded-xl shadow-sm mb-6">
              {/* Main Filters */}
              <div className="p-4 border-b border-gray-100">
                <div className="flex flex-wrap items-center gap-3">
                  <button
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 
                    ${selectedFilter === 'all' 
                      ? 'bg-[#1dbf73] text-white shadow-lg shadow-[#1dbf73]/20' 
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
                    onClick={() => setSelectedFilter('all')}
                  >
                    <div className="flex items-center gap-2">
                      <DocumentDuplicateIcon className="w-4 h-4" />
                      <span>All Orders</span>
                      <span className="bg-white/20 text-xs py-0.5 px-2 rounded-full">24</span>
                    </div>
                  </button>

                  <button
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 
                    ${selectedFilter === 'active' 
                      ? 'bg-[#1dbf73] text-white shadow-lg shadow-[#1dbf73]/20' 
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
                    onClick={() => setSelectedFilter('active')}
                  >
                    <div className="flex items-center gap-2">
                      <ClockIcon className="w-4 h-4" />
                      <span>Active</span>
                      <span className="bg-white/20 text-xs py-0.5 px-2 rounded-full">12</span>
                    </div>
                  </button>

                  <button
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 
                    ${selectedFilter === 'late' 
                      ? 'bg-red-500 text-white shadow-lg shadow-red-500/20' 
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
                    onClick={() => setSelectedFilter('late')}
                  >
                    <div className="flex items-center gap-2">
                      <ExclamationCircleIcon className="w-4 h-4" />
                      <span>Late</span>
                      <span className="bg-white/20 text-xs py-0.5 px-2 rounded-full">3</span>
                    </div>
                  </button>

                  <button
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 
                    ${selectedFilter === 'completed' 
                      ? 'bg-[#1dbf73] text-white shadow-lg shadow-[#1dbf73]/20' 
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
                    onClick={() => setSelectedFilter('completed')}
                  >
                    <div className="flex items-center gap-2">
                      <CheckCircleIcon className="w-4 h-4" />
                      <span>Completed</span>
                      <span className="bg-white/20 text-xs py-0.5 px-2 rounded-full">45</span>
                    </div>
                  </button>
                </div>
              </div>

              {/* Advanced Filters */}
              <div className="p-4 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  {/* Filter Dropdown */}
                  <div className="relative">
                    <button className="flex items-center gap-2 px-4 py-2 text-sm text-gray-600 
                                     hover:text-[#1dbf73] bg-gray-50 rounded-lg hover:bg-gray-100 
                                     transition-colors duration-200">
                      <FunnelIcon className="w-4 h-4" />
                      <span>Filter</span>
                      <ChevronDownIcon className="w-4 h-4" />
                    </button>
                    {/* Add dropdown menu here if needed */}
                  </div>

                  {/* Date Range Picker */}
                  <div className="relative">
                    <button className="flex items-center gap-2 px-4 py-2 text-sm text-gray-600 
                                     hover:text-[#1dbf73] bg-gray-50 rounded-lg hover:bg-gray-100 
                                     transition-colors duration-200">
                      <CalendarIcon className="w-4 h-4" />
                      <span>Last 30 Days</span>
                      <ChevronDownIcon className="w-4 h-4" />
                    </button>
                    {/* Add date picker dropdown here if needed */}
                  </div>

                  {/* Active Filters (example) */}
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 text-xs font-medium text-[#1dbf73] bg-[#1dbf73]/10 
                                  rounded-full flex items-center gap-1">
                      Priority: High
                      <XMarkIcon className="w-3 h-3 cursor-pointer" />
                    </span>
                    <span className="px-3 py-1 text-xs font-medium text-[#1dbf73] bg-[#1dbf73]/10 
                                  rounded-full flex items-center gap-1">
                      Status: In Progress
                      <XMarkIcon className="w-3 h-3 cursor-pointer" />
                    </span>
                  </div>
                </div>

                {/* New Order Button */}
                <button 
                  onClick={() => setIsNewOrderModalOpen(true)}
                  className="flex items-center gap-2 px-4 py-2 bg-[#1dbf73] text-white 
                           rounded-lg hover:bg-[#19a463] transition-colors duration-200 
                           shadow-lg shadow-[#1dbf73]/20"
                >
                  <PlusIcon className="w-5 h-5" />
                  <span className="font-medium">New Order</span>
                </button>
              </div>
            </div>

            {/* Orders Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {orders.map((order) => (
                <div key={order.id} 
                     className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 
                                border border-gray-100 hover:border-[#1dbf73]/20 group">
                  <div className="p-6">
                    {/* Header */}
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex gap-3">
                        <img 
                          src={order.clientAvatar} 
                          alt={order.clientName} 
                          className="w-10 h-10 rounded-full ring-2 ring-gray-100"
                        />
                        <div>
                          <h3 className="font-semibold text-lg text-gray-900 group-hover:text-[#1dbf73] 
                                       transition-colors duration-200">
                            {order.projectTitle}
                          </h3>
                          <p className="text-sm text-gray-500">{order.clientName}</p>
                        </div>
                      </div>
                      {order.urgent && (
                        <span className="px-2.5 py-1.5 bg-red-100 text-red-600 text-xs font-medium rounded-full
                                       flex items-center gap-1 shadow-sm shadow-red-100">
                          <ExclamationCircleIcon className="w-3.5 h-3.5" />
                          Urgent
                        </span>
                      )}
                    </div>

                    {/* Description */}
                    <p className="text-sm text-gray-600 mb-4 line-clamp-2">{order.description}</p>

                    {/* Progress Bar */}
                    <div className="mb-4">
                      <div className="flex justify-between items-center mb-1.5">
                        <span className="text-sm text-gray-500">Progress</span>
                        <span className="text-sm font-medium text-[#1dbf73]">{order.progress}%</span>
                      </div>
                      <div className="w-full bg-gray-100 rounded-full h-2 overflow-hidden">
                        <div 
                          className="bg-[#1dbf73] h-2 rounded-full transition-all duration-300
                                   shadow-sm shadow-[#1dbf73]/20"
                          style={{ width: `${order.progress}%` }}
                        ></div>
                      </div>
                    </div>

                    {/* Tags */}
                    {order.tags && (
                      <div className="flex flex-wrap gap-2 mb-4">
                        {order.tags.map((tag, index) => (
                          <span key={index} 
                                className="px-2.5 py-1 bg-gray-50 text-gray-600 text-xs rounded-full 
                                         flex items-center gap-1 hover:bg-gray-100 transition-colors duration-200
                                         border border-gray-100">
                            <TagIcon className="w-3.5 h-3.5" />
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
                        <div className="flex gap-1.5">
                          {order.milestones.map((milestone, index) => (
                            <div key={index} className="flex-1">
                              <div 
                                className={`h-1.5 rounded-full ${
                                  milestone.completed 
                                    ? 'bg-[#1dbf73] shadow-sm shadow-[#1dbf73]/20' 
                                    : 'bg-gray-100'
                                }`}
                              ></div>
                              <span className="text-xs text-gray-500 mt-1 block truncate">
                                {milestone.name}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Footer */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1.5">
                          <ClockIcon className="w-4 h-4 text-[#1dbf73]" />
                          <span className="text-sm text-gray-600">{order.timeLeft}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <CurrencyDollarIcon className="w-4 h-4 text-[#1dbf73]" />
                          <span className="text-sm font-medium text-gray-700">{order.price}</span>
                        </div>
                      </div>
                      <button className="flex items-center gap-1 text-sm text-[#1dbf73] hover:text-[#19a463] 
                                       font-medium transition-colors duration-200 group">
                        View Details
                        <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-200" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* New Order Modal */}
      {isNewOrderModalOpen && (
        <div className="fixed inset-0 z-[70] overflow-y-auto">
          {/* Backdrop */}
          <div className="fixed inset-0 bg-gray-900/50 backdrop-blur-sm transition-opacity" 
               onClick={() => setIsNewOrderModalOpen(false)} />

          {/* Modal */}
          <div className="flex min-h-full items-center justify-center p-4">
            <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-xl 
                          transform transition-all overflow-hidden">
              {/* Modal Header */}
              <div className="px-6 py-4 border-b border-gray-100 bg-gray-50/50">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-gray-900">Create New Order</h3>
                  <button 
                    onClick={() => setIsNewOrderModalOpen(false)}
                    className="text-gray-400 hover:text-gray-500 transition-colors"
                  >
                    <XMarkIcon className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Modal Content */}
              <div className="px-6 py-4">
                <div className="space-y-6">
                  {/* Project Details */}
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Project Title
                      </label>
                      <input 
                        type="text"
                        placeholder="Enter project title"
                        className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 
                                 focus:ring-[#1dbf73]/20 focus:border-[#1dbf73] transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Client Name
                      </label>
                      <input 
                        type="text"
                        placeholder="Enter client name"
                        className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 
                                 focus:ring-[#1dbf73]/20 focus:border-[#1dbf73] transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Project Description
                      </label>
                      <textarea 
                        rows="3"
                        placeholder="Enter project description"
                        className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 
                                 focus:ring-[#1dbf73]/20 focus:border-[#1dbf73] transition-all"
                      />
                    </div>
                  </div>

                  {/* Project Timeline & Budget */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Due Date
                      </label>
                      <input 
                        type="date"
                        className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 
                                 focus:ring-[#1dbf73]/20 focus:border-[#1dbf73] transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Budget
                      </label>
                      <div className="relative">
                        <span className="absolute left-3 top-2.5 text-gray-500">$</span>
                        <input 
                          type="number"
                          placeholder="0.00"
                          className="w-full pl-8 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 
                                   focus:ring-[#1dbf73]/20 focus:border-[#1dbf73] transition-all"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Milestones */}
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <label className="block text-sm font-medium text-gray-700">
                        Project Milestones
                      </label>
                      <button className="text-sm text-[#1dbf73] hover:text-[#19a463] 
                                       flex items-center gap-1">
                        <PlusIcon className="w-4 h-4" />
                        Add Milestone
                      </button>
                    </div>
                    <div className="space-y-3">
                      {[1, 2, 3].map((milestone) => (
                        <div 
                          key={milestone}
                          className="p-3 border border-gray-200 rounded-lg bg-gray-50/50"
                        >
                          <div className="flex items-start justify-between">
                            <div className="flex-1 grid grid-cols-2 gap-3">
                              <input 
                                type="text"
                                placeholder="Milestone name"
                                className="px-3 py-1.5 border border-gray-200 rounded-lg focus:ring-2 
                                         focus:ring-[#1dbf73]/20 focus:border-[#1dbf73] transition-all"
                              />
                              <input 
                                type="date"
                                className="px-3 py-1.5 border border-gray-200 rounded-lg focus:ring-2 
                                         focus:ring-[#1dbf73]/20 focus:border-[#1dbf73] transition-all"
                              />
                            </div>
                            <button className="p-1 text-gray-400 hover:text-red-500 transition-colors">
                              <TrashIcon className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Priority & Tags */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Priority
                      </label>
                      <select className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 
                                       focus:ring-[#1dbf73]/20 focus:border-[#1dbf73] transition-all">
                        <option>Low</option>
                        <option>Medium</option>
                        <option>High</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Tags
                      </label>
                      <input 
                        type="text"
                        placeholder="Add tags separated by commas"
                        className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 
                                 focus:ring-[#1dbf73]/20 focus:border-[#1dbf73] transition-all"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="px-6 py-4 border-t border-gray-100 bg-gray-50/50">
                <div className="flex items-center justify-end gap-3">
                  <button 
                    onClick={() => setIsNewOrderModalOpen(false)}
                    className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-800 
                             transition-colors"
                  >
                    Cancel
                  </button>
                  <button 
                    className="px-4 py-2 text-sm font-medium text-white bg-[#1dbf73] 
                             hover:bg-[#19a463] rounded-lg shadow-lg shadow-[#1dbf73]/25 
                             transition-all duration-200 flex items-center gap-2"
                  >
                    <PlusIcon className="w-4 h-4" />
                    Create Order
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Click Outside Handler */}
      {isSearchFocused && (
        <div 
          className="fixed inset-0 z-40"
          onClick={() => setIsSearchFocused(false)}
        />
      )}
    </div>
  );
}
