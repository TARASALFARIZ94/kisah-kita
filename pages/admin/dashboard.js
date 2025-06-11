// pages/admin/dashboard.js
import { useEffect, useState } from 'react';

export default function AdminDashboard() {
  const [stats, setStats] = useState({
    users: 0,
    trips: 0,
    rundowns: 0,
    photos: 0,
    splitBills: 0
  });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const [userRes, tripRes, rundownRes, photoRes, billRes] = await Promise.all([
          fetch('/api/user'),
          fetch('/api/trip'),
          fetch('/api/rundown'),
          fetch('/api/photo'),
          fetch('/api/splitbill'),
        ]);

        const users = await userRes.json();
        const trips = await tripRes.json();
        const rundowns = await rundownRes.json();
        const photos = await photoRes.json();
        const bills = await billRes.json();

        setStats({
          users: users.length,
          trips: trips.length,
          rundowns: rundowns.length,
          photos: photos.length,
          splitBills: bills.length
        });
      } catch (error) {
        console.error('Failed to fetch stats:', error);
      }
    };

    fetchStats();
  }, []);

  const statItems = [
    { label: 'Total User', value: stats.users, icon: '👤' },
    { label: 'Total Trip', value: stats.trips, icon: '🧳' },
    { label: 'Total Rundown', value: stats.rundowns, icon: '🗓️' },
    { label: 'Total Photo', value: stats.photos, icon: '📷' },
    { label: 'Total Split Bill', value: stats.splitBills, icon: '💸' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-gray-800">📊 Dashboard Admin</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {statItems.map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-2xl p-6 flex items-center justify-between hover:shadow-xl transition"
            >
              <div className="text-4xl">{item.icon}</div>
              <div className="text-right">
                <p className="text-sm text-gray-500">{item.label}</p>
                <p className="text-xl font-semibold text-gray-800">{item.value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
