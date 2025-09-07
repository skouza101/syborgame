import { useState } from 'react';
import { FaUser, FaGamepad, FaTrophy, FaCog, FaEdit, FaSave, FaTimes, FaHeart, FaDownload, FaStar, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';
import { BiSolidBadgeCheck } from 'react-icons/bi';
import Layout from "../components/Container";

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    name: "Alex Johnson",
    username: "@alexgamer",
    email: "alex.johnson@email.com",
    location: "New York, USA",
    joinDate: "January 2023",
    bio: "Passionate gamer and streamer. Love exploring new worlds and connecting with the gaming community!",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    coverImage: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&h=300&fit=crop",
    stats: {
      gamesPlayed: 127,
      hoursPlayed: 2847,
      achievements: 89,
      followers: 12500,
      following: 234
    },
    favoriteGames: [
      { name: "Cyberpunk 2077", image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=100&h=100&fit=crop", rating: 4.8 },
      { name: "The Witcher 3", image: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=100&h=100&fit=crop", rating: 4.9 },
      { name: "Elden Ring", image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=100&h=100&fit=crop", rating: 4.7 }
    ],
    recentActivity: [
      { type: "achievement", game: "Cyberpunk 2077", title: "Night City Legend", time: "2 hours ago" },
      { type: "game", game: "The Witcher 3", title: "Completed main story", time: "1 day ago" },
      { type: "stream", game: "Elden Ring", title: "Boss fight stream", time: "3 days ago" }
    ]
  });

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  return (
    <Layout>
      <div className="min-h-screen text-white">
        <div className="relative">
          <div className="h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80 relative overflow-hidden rounded-2xl">
            <img 
              src={profileData.coverImage} 
              alt="Cover" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 gradient-overlay"></div>
          </div>
          <div className="relative container-responsive -mt-16 sm:-mt-20 md:-mt-24">
            <div className="flex-responsive items-start sm:items-end">
              <div className="relative">
                <img 
                  src={profileData.avatar} 
                  alt="Profile" 
                  className="w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-40 lg:h-40 rounded-full border-4 border-zinc-800 object-cover"
                />
                <div className="absolute -bottom-2 -right-2 bg-green-500 w-6 h-6 rounded-full border-2 border-zinc-800"></div>
              </div>
              <div className="flex-1 pb-4">
                <div className="flex-responsive sm:items-center">
                  <h1 className="text-heading-3">
                    {profileData.name}
                  </h1>
                  <div className="flex items-center gap-2">
                    <BiSolidBadgeCheck className="text-blue-500 text-xl" />
                    <span className="text-body-medium text-zinc-400">Verified Gamer</span>
                  </div>
                </div>
                <p className="text-pink-500 text-lg sm:text-xl font-medium">{profileData.username}</p>
                <div className="flex flex-wrap items-center responsive-gap mt-2 text-body-medium text-zinc-400">
                  <div className="flex items-center gap-1">
                    <FaMapMarkerAlt className="text-pink-500" />
                    {profileData.location}
                  </div>
                  <div className="flex items-center gap-1">
                    <FaCalendarAlt className="text-pink-500" />
                    Joined {profileData.joinDate}
                  </div>
                </div>
                {isEditing ? (
                  <div className="mt-4 flex gap-2">
                    <button 
                      onClick={handleSave}
                      className="btn-primary flex items-center gap-2"
                    >
                      <FaSave />
                      Save
                    </button>
                    <button 
                      onClick={handleCancel}
                      className="btn-secondary flex items-center gap-2"
                    >
                      <FaTimes />
                      Cancel
                    </button>
                  </div>
                ) : (
                  <button 
                    onClick={handleEdit}
                    className="mt-4 btn-primary flex items-center gap-2"
                  >
                    <FaEdit />
                    Edit Profile
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="container-responsive section-spacing">
          <div className="grid grid-cols-1 lg:grid-cols-3 responsive-gap">
            <div className="lg:col-span-2 space-y-6">
              <div className="card-base">
                <h2 className="text-heading-4 mb-4 flex items-center gap-2">
                  <FaUser className="text-pink-500" />
                  About
                </h2>
                {isEditing ? (
                  <textarea 
                    value={profileData.bio}
                    onChange={(e) => setProfileData({...profileData, bio: e.target.value})}
                    className="w-full bg-zinc-700 text-white p-3 rounded-lg resize-none h-24 border border-zinc-600 focus:border-pink-500 focus:outline-none"
                    placeholder="Tell us about yourself..."
                  />
                ) : (
                  <p className="text-body-large leading-relaxed">{profileData.bio}</p>
                )}
              </div>
              <div className="card-base">
                <h2 className="text-heading-4 mb-6 flex items-center gap-2">
                  <FaGamepad className="text-pink-500" />
                  Favorite Games
                </h2>
                <div className="grid-responsive">
                  {profileData.favoriteGames.map((game, index) => (
                    <div key={index} className="bg-zinc-700 rounded-xl p-4 hover:bg-zinc-600 transition-colors border border-zinc-600">
                      <img 
                        src={game.image} 
                        alt={game.name}
                        className="w-full h-24 object-cover rounded-lg mb-3"
                      />
                      <h3 className="font-semibold text-white mb-1">{game.name}</h3>
                      <div className="flex items-center gap-1">
                        <FaStar className="text-yellow-500 text-sm" />
                        <span className="text-body-small text-zinc-300">{game.rating}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="card-base">
                <h2 className="text-heading-4 mb-6 flex items-center gap-2">
                  <FaTrophy className="text-pink-500" />
                  Recent Activity
                </h2>
                <div className="space-y-4">
                  {profileData.recentActivity.map((activity, index) => (
                    <div key={index} className="flex items-center gap-4 p-3 bg-zinc-700 rounded-lg border border-zinc-600">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        activity.type === 'achievement' ? 'bg-yellow-500' :
                        activity.type === 'game' ? 'bg-green-500' : 'bg-purple-500'
                      }`}>
                        {activity.type === 'achievement' ? <FaTrophy /> :
                         activity.type === 'game' ? <FaGamepad /> : <FaHeart />}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-white">{activity.title}</h4>
                        <p className="text-body-small text-zinc-400">{activity.game}</p>
                      </div>
                      <span className="text-body-small text-zinc-500">{activity.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="card-base">
                <h2 className="text-heading-4 mb-6 flex items-center gap-2">
                  <FaCog className="text-pink-500" />
                  Statistics
                </h2>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-zinc-400">Games Played</span>
                    <span className="text-white font-semibold">{profileData.stats.gamesPlayed}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-zinc-400">Hours Played</span>
                    <span className="text-white font-semibold">{profileData.stats.hoursPlayed.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-zinc-400">Achievements</span>
                    <span className="text-white font-semibold">{profileData.stats.achievements}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-zinc-400">Followers</span>
                    <span className="text-white font-semibold">{profileData.stats.followers.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-zinc-400">Following</span>
                    <span className="text-white font-semibold">{profileData.stats.following}</span>
                  </div>
                </div>
              </div>
              <div className="card-base">
                <h2 className="text-heading-4 mb-6">Quick Actions</h2>
                <div className="space-y-3">
                  <button className="w-full btn-primary flex items-center justify-center gap-2">
                    <FaDownload />
                    Download Games
                  </button>
                  <button className="w-full btn-secondary flex items-center justify-center gap-2">
                    <FaCog />
                    Settings
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Profile;
