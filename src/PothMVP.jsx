import React, { useState } from 'react';
import { Star, Play, User, Search, BookOpen, TrendingUp } from 'lucide-react';

const PothMVP = () => {
  const [selectedBook, setSelectedBook] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  // Mock data for verified reviewers
  const verifiedReviewers = [
    {
      id: 1,
      name: "ප්‍රියන්ත කොලඹගේ",
      nameEn: "Priyantha Kolombage",
      avatar: "PK",
      credentials: "සාහිත්‍ය විචාරක | Literary Critic",
      followers: "12.5K",
      reviews: 145
    },
    {
      id: 2,
      name: "සුනීල් අරියරත්න",
      nameEn: "Sunil Ariyaratna", 
      avatar: "SA",
      credentials: "කවි හා ලේඛක | Poet & Author",
      followers: "8.9K",
      reviews: 89
    },
    {
      id: 3,
      name: "නිමල් සිරිසේන",
      nameEn: "Nimal Sirisena",
      avatar: "NS", 
      credentials: "පුවත්පත් සංස්කාරක | Newspaper Editor",
      followers: "15.2K",
      reviews: 203
    }
  ];

  // Mock book data
  const featuredBooks = [
    {
      id: 1,
      title: "මදොල් දූව",
      titleEn: "Madol Duwa",
      author: "Martin Wickramasinghe",
      cover: "📚",
      verifiedRating: 4.8,
      communityRating: 4.6,
      reviewCount: 23,
      verifiedReview: "සිංහල සාහිත්‍යයේ සම්භාවනයක්. ළමා සාහිත්‍යයේ සුන්දරම නිර්මාණයක්.",
      reviewerName: "ප්‍රියන්ත කොලඹගේ",
      hasVideo: true,
      featured: true
    },
    {
      id: 2,
      title: "හතරමහා රජතුමා",
      titleEn: "Hataramaha Rajatuma", 
      author: "W.A. Silva",
      cover: "👑",
      verifiedRating: 4.5,
      communityRating: 4.3,
      reviewCount: 18,
      verifiedReview: "ඓතිහාසික නවකතාවක සියලු ගුණාංග සහිත කෘතියක්.",
      reviewerName: "සුනීල් අරියරත්න",
      hasVideo: false,
      featured: false
    },
    {
      id: 3,
      title: "ගම්පෙරළිය", 
      titleEn: "Gamperaliya",
      author: "Martin Wickramasinghe",
      cover: "🏛️",
      verifiedRating: 4.9,
      communityRating: 4.7,
      reviewCount: 31,
      verifiedReview: "සමාජ වෙනස්වීම් විස්තර කරන ශ්‍රේෂ්ඨ කෘතියක්.",
      reviewerName: "නිමල් සිරිසේන", 
      hasVideo: true,
      featured: false
    }
  ];

  const StarRating = ({ rating, size = 16 }) => {
    return (
      <div className="flex items-center">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            size={size}
            className={`${
              star <= rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
            }`}
          />
        ))}
        <span className="ml-1 text-sm text-gray-600">{rating}</span>
      </div>
    );
  };

  const BookCard = ({ book, onClick }) => (
    <div 
      className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow cursor-pointer border border-gray-200"
      onClick={() => onClick(book)}
    >
      <div className="flex items-start space-x-3">
        <div className="text-4xl">{book.cover}</div>
        <div className="flex-1">
          <h3 className="font-bold text-gray-900 text-sm">{book.title}</h3>
          <p className="text-xs text-gray-500 mb-2">{book.author}</p>
          
          <div className="space-y-1">
            <div className="flex items-center justify-between">
              <span className="text-xs text-green-600 font-medium">විශේෂඥ අගය</span>
              <StarRating rating={book.verifiedRating} size={12} />
            </div>
            <div className="flex items-center justify-between">
              <span className="text-xs text-blue-600 font-medium">ප්‍රජා අගය</span>
              <StarRating rating={book.communityRating} size={12} />
            </div>
          </div>
          
          <div className="mt-2 flex items-center justify-between">
            <span className="text-xs text-gray-500">{book.reviewCount} reviews</span>
            {book.hasVideo && (
              <div className="flex items-center text-red-600">
                <Play size={12} />
                <span className="text-xs ml-1">Video</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-6xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <BookOpen className="text-blue-600" size={28} />
              <h1 className="text-2xl font-bold text-gray-900">Poth</h1>
              <span className="text-sm text-gray-500">සිංහල පොත් විචාර</span>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-2.5 text-gray-400" size={16} />
                <input
                  type="text"
                  placeholder="පොත් සොයන්න..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <User className="text-gray-600" size={20} />
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 py-6">
        {/* Featured Review Section */}
        <section className="mb-8">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 text-white">
            <div className="flex items-center space-x-2 mb-4">
              <TrendingUp size={20} />
              <h2 className="text-xl font-bold">සතියේ විශේෂ විචාරය</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="text-6xl">{featuredBooks[0].cover}</div>
                  <div>
                    <h3 className="text-2xl font-bold">{featuredBooks[0].title}</h3>
                    <p className="text-blue-100">{featuredBooks[0].author}</p>
                    <div className="flex items-center space-x-4 mt-2">
                      <StarRating rating={featuredBooks[0].verifiedRating} size={16} />
                      <button className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm hover:bg-opacity-30 transition-colors flex items-center space-x-1">
                        <Play size={14} />
                        <span>විචාරය නරඹන්න</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <p className="text-lg mb-3">{featuredBooks[0].verifiedReview}</p>
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center text-sm font-bold">
                    PK
                  </div>
                  <span className="text-blue-100">- {featuredBooks[0].reviewerName}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-gray-900">නවතම විචාර</h2>
              <select className="text-sm border border-gray-300 rounded-lg px-3 py-1 bg-white">
                <option>නවතම</option>
                <option>ජනප්‍රිය</option>
                <option>වැඩිම අගය</option>
              </select>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4">
              {featuredBooks.slice(1).map((book) => (
                <BookCard key={book.id} book={book} onClick={setSelectedBook} />
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Verified Reviewers */}
            <div className="bg-white rounded-lg shadow-md p-4">
              <h3 className="font-bold text-gray-900 mb-4 flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                සත්‍යාපිත විචාරකයන්
              </h3>
              <div className="space-y-3">
                {verifiedReviewers.map((reviewer) => (
                  <div key={reviewer.id} className="flex items-center space-x-3 p-2 hover:bg-gray-50 rounded-lg transition-colors">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center font-bold text-blue-600">
                      {reviewer.avatar}
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-sm text-gray-900">{reviewer.name}</p>
                      <p className="text-xs text-gray-500">{reviewer.credentials}</p>
                      <div className="flex items-center space-x-3 text-xs text-gray-400 mt-1">
                        <span>{reviewer.followers} followers</span>
                        <span>{reviewer.reviews} reviews</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-white rounded-lg shadow-md p-4">
              <h3 className="font-bold text-gray-900 mb-4">ප්‍ලැට්ෆෝම් සංඛ්‍යාලේඛන</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">සම්පූර්ණ පොත්</span>
                  <span className="font-bold text-blue-600">1,247</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">විචාර</span>
                  <span className="font-bold text-green-600">3,456</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">සත්‍යාපිත විචාරකයන්</span>
                  <span className="font-bold text-purple-600">23</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Book Detail Modal */}
      {selectedBook && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-start space-x-4">
                  <div className="text-6xl">{selectedBook.cover}</div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">{selectedBook.title}</h2>
                    <p className="text-gray-600 mb-2">{selectedBook.author}</p>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-4">
                        <span className="text-sm font-medium text-green-600">විශේෂඥ අගය:</span>
                        <StarRating rating={selectedBook.verifiedRating} />
                      </div>
                      <div className="flex items-center space-x-4">
                        <span className="text-sm font-medium text-blue-600">ප්‍රජා අගය:</span>
                        <StarRating rating={selectedBook.communityRating} />
                      </div>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedBook(null)}
                  className="text-gray-400 hover:text-gray-600 text-xl font-bold"
                >
                  ×
                </button>
              </div>

              {/* Verified Review Section */}
              <div className="bg-green-50 rounded-lg p-4 mb-6">
                <div className="flex items-center space-x-2 mb-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="font-bold text-green-800">සත්‍යාපිත විචාරය</span>
                </div>
                <p className="text-gray-800 mb-3">{selectedBook.verifiedReview}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">- {selectedBook.reviewerName}</span>
                  {selectedBook.hasVideo && (
                    <button className="bg-red-600 text-white px-3 py-1 rounded-lg text-sm hover:bg-red-700 transition-colors flex items-center space-x-1">
                      <Play size={14} />
                      <span>YouTube නරඹන්න</span>
                    </button>
                  )}
                </div>
              </div>

              {/* Community Reviews Preview */}
              <div className="border-t pt-4">
                <h3 className="font-bold text-gray-900 mb-3">ප්‍රජා විචාර ({selectedBook.reviewCount})</h3>
                <div className="text-center py-8 text-gray-500">
                  <p className="text-sm">ප්‍රජා විචාර ඉදිරි අදියරේදී එකතු කරනු ලැබේ</p>
                  <button className="mt-2 text-blue-600 text-sm hover:underline">
                    පළමු විචාරය ලියන්න
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PothMVP;