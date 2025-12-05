import React, { useState } from 'react';

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const blogCategories = [
    { id: 'all', name: 'All Articles' },
    { id: 'prevention', name: 'Disease Prevention' },
    { id: 'nutrition', name: 'Nutrition & Diet' },
    { id: 'fitness', name: 'Fitness & Wellness' },
    { id: 'tests', name: 'Understanding Tests' },
    { id: 'seasonal', name: 'Seasonal Health' }
  ];

  const blogPosts = [
    {
      id: 1,
      title: "Understanding Your Blood Test Results",
      category: "tests",
      excerpt: "Learn how to interpret common blood test parameters and what they mean for your health.",
      image: "/api/placeholder/400/250",
      date: "Jan 15, 2024",
      readTime: "5 min read",
      featured: true
    },
    {
      id: 2,
      title: "10 Foods to Boost Your Immunity Naturally",
      category: "nutrition",
      excerpt: "Discover the power of natural foods in strengthening your immune system.",
      image: "/api/placeholder/400/250",
      date: "Jan 12, 2024",
      readTime: "4 min read",
      featured: false
    },
    {
      id: 3,
      title: "The Importance of Regular Health Checkups",
      category: "prevention",
      excerpt: "Why preventive health screenings are crucial for early disease detection.",
      image: "/api/placeholder/400/250",
      date: "Jan 10, 2024",
      readTime: "6 min read",
      featured: true
    },
    {
      id: 4,
      title: "Managing Diabetes Through Diet and Exercise",
      category: "fitness",
      excerpt: "Practical tips for diabetes management through lifestyle changes.",
      image: "/api/placeholder/400/250",
      date: "Jan 8, 2024",
      readTime: "7 min read",
      featured: false
    },
    {
      id: 5,
      title: "Winter Health: Preventing Common Cold and Flu",
      category: "seasonal",
      excerpt: "Stay healthy during winter with these preventive measures.",
      image: "/api/placeholder/400/250",
      date: "Jan 5, 2024",
      readTime: "3 min read",
      featured: false
    },
    {
      id: 6,
      title: "Thyroid Disorders: Symptoms and Diagnosis",
      category: "tests",
      excerpt: "Understanding thyroid function tests and when to get tested.",
      image: "/api/placeholder/400/250",
      date: "Jan 3, 2024",
      readTime: "5 min read",
      featured: false
    }
  ];

  const healthTips = [
    {
      tip: "Drink 8-10 glasses of water daily for proper hydration",
      category: "nutrition"
    },
    {
      tip: "Get at least 30 minutes of moderate exercise every day",
      category: "fitness"
    },
    {
      tip: "Schedule annual health checkups for preventive care",
      category: "prevention"
    },
    {
      tip: "Maintain a balanced diet with fruits and vegetables",
      category: "nutrition"
    },
    {
      tip: "Practice stress management techniques like meditation",
      category: "wellness"
    },
    {
      tip: "Get adequate sleep of 7-8 hours per night",
      category: "wellness"
    }
  ];

  const filteredPosts = activeCategory === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);

  return (
    <div style={{ paddingTop: '80px' }}>
      {/* Hero Section */}
      <section className="lab-hero-section">
        <div className="container">
          <div className="row align-items-center min-vh-50">
            <div className="col-lg-8 mx-auto text-center text-black">
              <h1 className="display-4 fw-bold mb-4">Health Tips & Blog</h1>
              <p className="lead mb-4">
                Expert Medical Advice and Health Information
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-5">
        <div className="container">
          <div className="row">
            {/* Main Content */}
            <div className="col-lg-8">
              {/* Category Filters */}
              <div className="d-flex flex-wrap gap-2 mb-4">
                {blogCategories.map(category => (
                  <button
                    key={category.id}
                    className={`btn ${activeCategory === category.id ? 'btn-primary' : 'btn-outline-primary'} btn-sm`}
                    onClick={() => setActiveCategory(category.id)}
                  >
                    {category.name}
                  </button>
                ))}
              </div>

              {/* Featured Posts */}
              <div className="row g-4 mb-5">
                {filteredPosts.filter(post => post.featured).map(post => (
                  <div key={post.id} className="col-12">
                    <div className="card lab-blog-card border-0 shadow-sm">
                      <div className="row g-0">
                        <div className="col-md-4">
                          <img src={post.image} className="img-fluid h-100 rounded-start" alt={post.title} />
                        </div>
                        <div className="col-md-8">
                          <div className="card-body">
                            <span className="badge bg-primary mb-2">Featured</span>
                            <h5 className="card-title fw-bold">{post.title}</h5>
                            <p className="card-text text-muted">{post.excerpt}</p>
                            <div className="d-flex justify-content-between align-items-center">
                              <small className="text-muted">
                                {post.date} • {post.readTime}
                              </small>
                              <button className="btn btn-primary btn-sm">Read More</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Regular Posts Grid */}
              <div className="row g-4">
                {filteredPosts.filter(post => !post.featured).map(post => (
                  <div key={post.id} className="col-md-6">
                    <div className="card lab-blog-card border-0 shadow-sm h-100">
                      <img src={post.image} className="card-img-top" alt={post.title} />
                      <div className="card-body">
                        <span className="badge bg-secondary mb-2 text-capitalize">{post.category}</span>
                        <h6 className="card-title fw-bold">{post.title}</h6>
                        <p className="card-text text-muted small">{post.excerpt}</p>
                      </div>
                      <div className="card-footer bg-transparent border-0">
                        <div className="d-flex justify-content-between align-items-center">
                          <small className="text-muted">{post.date}</small>
                          <button className="btn btn-outline-primary btn-sm">Read</button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* No Posts Message */}
              {filteredPosts.length === 0 && (
                <div className="text-center py-5">
                  <h5>No articles found in this category</h5>
                  <p className="text-muted">Please select a different category</p>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="col-lg-4">
              {/* Health Tips Widget */}
              <div className="card border-0 shadow-sm mb-4">
                <div className="card-header bg-primary text-white">
                  <h6 className="mb-0">💡 Quick Health Tips</h6>
                </div>
                <div className="card-body">
                  {healthTips.map((tip, index) => (
                    <div key={index} className="d-flex mb-3">
                      <span className="text-success me-2">✓</span>
                      <small>{tip.tip}</small>
                    </div>
                  ))}
                </div>
              </div>

              {/* Popular Tests Widget */}
              <div className="card border-0 shadow-sm mb-4">
                <div className="card-header bg-info text-white">
                  <h6 className="mb-0">🔬 Popular Tests</h6>
                </div>
                <div className="card-body">
                  {[
                    "Complete Blood Count",
                    "Thyroid Profile",
                    "Diabetes Screening",
                    "Liver Function Test",
                    "Vitamin D Test",
                    "Lipid Profile"
                  ].map((test, index) => (
                    <div key={index} className="d-flex justify-content-between align-items-center mb-2">
                      <small>{test}</small>
                       {/*<button className="btn btn-outline-info btn-sm">Book</button>*/}
                    </div>
                  ))}
                </div>
              </div>

              {/* Emergency Contact */}
              <div className="card border-0 shadow-sm bg-warning">
                <div className="card-body text-center">
                  <h6>🚨 Medical Emergency?</h6>
                  <p className="small mb-2">Contact us immediately</p>
                  <button className="btn btn-danger btn-sm w-100">
                    📞 Emergency: +91-9876543210
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section 
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 text-center">
              <h3 className="fw-bold mb-3">Stay Updated with Health Tips</h3>
              <p className="text-muted mb-4">Subscribe to our newsletter for regular health updates and medical insights</p>
              <div className="input-group">
                <input 
                  type="email" 
                  className="form-control" 
                  placeholder="Enter your email address" 
                />
                <button className="btn btn-primary">Subscribe</button>
              </div>
            </div>
          </div>
        </div>
      </section>*/}
    </div>
  );
};

export default Blog;