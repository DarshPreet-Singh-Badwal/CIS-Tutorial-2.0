/**
 * MOCK DATA — Brightspace LMS Prototype
 * Realistic sample data for all pages
 */

const MockData = {
  user: {
    student: { name: 'Alex Johnson', email: 'alex.johnson@university.edu', id: 'STU-2024-0847', avatar: null, initials: 'AJ', program: 'B.Sc. Computer Science', year: '3rd Year' },
    instructor: { name: 'Dr. Sarah Chen', email: 's.chen@university.edu', id: 'FAC-0234', avatar: null, initials: 'SC', department: 'Department of Computer Science', role: 'Associate Professor' }
  },

  courses: [
    { id: 'cs301', code: 'CS 301', name: 'Algorithms & Data Structures', instructor: 'Dr. Michael Park', progress: 68, color: 'var(--course-blue)', icon: '⚡', credits: 3, nextDue: { title: 'Assignment 4: Graph Theory', date: '2024-12-20', type: 'assignment' }, grade: 'A-', students: 34, unread: 2 },
    { id: 'cs401', code: 'CS 401', name: 'Machine Learning Fundamentals', instructor: 'Dr. Sarah Chen', progress: 45, color: 'var(--course-purple)', icon: '🧠', credits: 4, nextDue: { title: 'Quiz 3: Neural Networks', date: '2024-12-18', type: 'quiz' }, grade: 'B+', students: 28, unread: 5 },
    { id: 'eng210', code: 'ENG 210', name: 'Technical Writing & Communication', instructor: 'Prof. Linda Torres', progress: 85, color: 'var(--course-pink)', icon: '✍️', credits: 2, nextDue: { title: 'Final Report Submission', date: '2024-12-22', type: 'assignment' }, grade: 'A', students: 45, unread: 0 },
    { id: 'math301', code: 'MATH 301', name: 'Linear Algebra & Applications', instructor: 'Dr. James Wilson', progress: 55, color: 'var(--course-orange)', icon: '📐', credits: 3, nextDue: { title: 'Problem Set 7', date: '2024-12-19', type: 'assignment' }, grade: 'B', students: 52, unread: 1 },
    { id: 'cs350', code: 'CS 350', name: 'Software Engineering Principles', instructor: 'Prof. Ana Rivera', progress: 72, color: 'var(--course-green)', icon: '⚙️', credits: 3, nextDue: { title: 'Sprint 3 Demo', date: '2024-12-21', type: 'discussion' }, grade: 'A-', students: 38, unread: 3 },
    { id: 'cs210', code: 'CS 210', name: 'Database Systems', instructor: 'Dr. Kevin Zhao', progress: 90, color: 'var(--course-teal)', icon: '🗄️', credits: 3, nextDue: { title: 'Lab 8: Query Optimization', date: '2024-12-23', type: 'quiz' }, grade: 'A', students: 40, unread: 0 }
  ],

  notifications: [
    { id: 1, type: 'announcement', course: 'CS 401', title: 'Quiz 3 Moved to Friday', text: 'Dr. Chen has rescheduled Quiz 3 to this Friday at 2PM.', time: '10 min ago', unread: true, icon: '📢' },
    { id: 2, type: 'grade', course: 'CS 301', title: 'Assignment 3 Graded', text: 'You received 47/50 — great work on the sorting algorithms!', time: '2 hours ago', unread: true, icon: '✅' },
    { id: 3, type: 'discussion', course: 'CS 350', title: 'New Reply in Sprint 3', text: 'Prof. Rivera replied to your post in "Architecture Discussion".', time: '5 hours ago', unread: true, icon: '💬' },
    { id: 4, type: 'deadline', course: 'MATH 301', title: 'Deadline Reminder', text: 'Problem Set 7 is due tomorrow at 11:59 PM.', time: '1 day ago', unread: false, icon: '⏰' },
    { id: 5, type: 'announcement', course: 'ENG 210', title: 'Office Hours Cancelled', text: 'Prof. Torres will be unavailable on Dec 20th. Email for appointments.', time: '2 days ago', unread: false, icon: '📢' }
  ],

  assignments: [
    { id: 'a1', course: 'CS 301', courseColor: 'var(--course-blue)', title: 'Assignment 4: Graph Theory Implementations', due: '2024-12-20T23:59', status: 'pending', grade: null, maxGrade: 50, type: 'assignment', instructions: 'Implement BFS, DFS, Dijkstra\'s algorithm and analyze complexity.', attachments: [] },
    { id: 'a2', course: 'CS 401', courseColor: 'var(--course-purple)', title: 'Lab Report: Neural Network Training', due: '2024-12-18T14:00', status: 'submitted', grade: null, maxGrade: 100, type: 'quiz', instructions: 'Submit your trained model report and analysis.', attachments: [] },
    { id: 'a3', course: 'ENG 210', courseColor: 'var(--course-pink)', title: 'Final Technical Report', due: '2024-12-22T23:59', status: 'pending', grade: null, maxGrade: 100, type: 'assignment', instructions: 'Write a comprehensive technical report on your semester project.', attachments: [] },
    { id: 'a4', course: 'MATH 301', courseColor: 'var(--course-orange)', title: 'Problem Set 7: Eigenvalues & Vectors', due: '2024-12-19T23:59', status: 'pending', grade: null, maxGrade: 40, type: 'assignment', instructions: 'Solve problems 1-8 from Chapter 7.', attachments: [] },
    { id: 'a5', course: 'CS 301', courseColor: 'var(--course-blue)', title: 'Assignment 3: Sorting Algorithms', due: '2024-12-10T23:59', status: 'graded', grade: 47, maxGrade: 50, type: 'assignment', feedback: 'Excellent implementation! Minor inefficiency in merge sort base case.', attachments: [] },
    { id: 'a6', course: 'CS 401', courseColor: 'var(--course-purple)', title: 'Quiz 2: Linear Regression', due: '2024-12-05T14:00', status: 'graded', grade: 85, maxGrade: 100, type: 'quiz', feedback: 'Good understanding of concepts. Review regularization techniques.', attachments: [] },
    { id: 'a7', course: 'CS 210', courseColor: 'var(--course-teal)', title: 'Lab 7: Index Design', due: '2024-12-12T23:59', status: 'graded', grade: 38, maxGrade: 40, type: 'assignment', feedback: 'Great index optimization strategy.', attachments: [] },
    { id: 'a8', course: 'CS 350', courseColor: 'var(--course-green)', title: 'Sprint 2 Demo', due: '2024-12-07T13:00', status: 'graded', grade: 88, maxGrade: 100, type: 'discussion', feedback: 'Strong demo. Improve presentation flow.', attachments: [] }
  ],

  grades: [
    {
      course: 'CS 301 — Algorithms & Data Structures', color: 'var(--course-blue)',
      overall: 91, letter: 'A-', credits: 3,
      categories: [
        { name: 'Assignments', weight: 40, earned: 93, items: [{ name: 'Assignment 1', score: 48, max: 50 }, { name: 'Assignment 2', score: 45, max: 50 }, { name: 'Assignment 3', score: 47, max: 50 }] },
        { name: 'Quizzes', weight: 20, earned: 88, items: [{ name: 'Quiz 1', score: 18, max: 20 }, { name: 'Quiz 2', score: 17, max: 20 }] },
        { name: 'Midterm', weight: 20, earned: 89, items: [{ name: 'Midterm Exam', score: 89, max: 100 }] },
        { name: 'Final', weight: 20, earned: null, items: [] }
      ]
    },
    {
      course: 'CS 401 — Machine Learning Fundamentals', color: 'var(--course-purple)',
      overall: 84, letter: 'B+', credits: 4,
      categories: [
        { name: 'Labs', weight: 30, earned: 85, items: [{ name: 'Lab 1', score: 90, max: 100 }, { name: 'Lab 2', score: 80, max: 100 }] },
        { name: 'Quizzes', weight: 30, earned: 83, items: [{ name: 'Quiz 1', score: 83, max: 100 }, { name: 'Quiz 2', score: 85, max: 100 }] },
        { name: 'Project', weight: 40, earned: null, items: [] }
      ]
    },
    {
      course: 'ENG 210 — Technical Writing', color: 'var(--course-pink)',
      overall: 96, letter: 'A', credits: 2,
      categories: [
        { name: 'Papers', weight: 60, earned: 95, items: [{ name: 'Paper 1', score: 95, max: 100 }, { name: 'Paper 2', score: 95, max: 100 }] },
        { name: 'Participation', weight: 20, earned: 98, items: [] },
        { name: 'Final Report', weight: 20, earned: null, items: [] }
      ]
    },
    {
      course: 'MATH 301 — Linear Algebra', color: 'var(--course-orange)',
      overall: 80, letter: 'B', credits: 3,
      categories: [
        { name: 'Problem Sets', weight: 50, earned: 79, items: [{ name: 'PS 1-6', score: 79, max: 100 }] },
        { name: 'Midterm', weight: 25, earned: 82, items: [{ name: 'Midterm', score: 82, max: 100 }] },
        { name: 'Final', weight: 25, earned: null, items: [] }
      ]
    }
  ],

  discussions: [
    { id: 'd1', course: 'CS 350', courseColor: 'var(--course-green)', title: 'Sprint 3 Architecture Decisions — Share your approach', replies: 23, unread: 4, lastActivity: '30 min ago', author: 'Prof. Rivera', pinned: true, type: 'discussion' },
    { id: 'd2', course: 'CS 401', courseColor: 'var(--course-purple)', title: 'How do you handle vanishing gradients in deep networks?', replies: 17, unread: 2, lastActivity: '2 hours ago', author: 'Alex Johnson', pinned: false, type: 'question' },
    { id: 'd3', course: 'CS 301', courseColor: 'var(--course-blue)', title: 'Week 12 Recap: Advanced Graph Algorithms Q&A', replies: 8, unread: 0, lastActivity: '1 day ago', author: 'Dr. Park', pinned: false, type: 'announcement' },
    { id: 'd4', course: 'ENG 210', courseColor: 'var(--course-pink)', title: 'Peer Review Partners — Final Report (Group 3)', replies: 12, unread: 1, lastActivity: '3 hours ago', author: 'Prof. Torres', pinned: true, type: 'discussion' },
    { id: 'd5', course: 'MATH 301', courseColor: 'var(--course-orange)', title: 'Problem Set 6 — Clarifications on Problem 4c', replies: 5, unread: 0, lastActivity: '2 days ago', author: 'Dr. Wilson', pinned: false, type: 'question' }
  ],

  calendarEvents: [
    { id: 'e1', title: 'Quiz 3: Neural Networks', course: 'CS 401', color: 'var(--course-purple)', date: '2024-12-18', time: '14:00', type: 'quiz', duration: 60 },
    { id: 'e2', title: 'PS 7 Due', course: 'MATH 301', color: 'var(--course-orange)', date: '2024-12-19', time: '23:59', type: 'assignment', duration: 0 },
    { id: 'e3', title: 'Assignment 4 Due', course: 'CS 301', color: 'var(--course-blue)', date: '2024-12-20', time: '23:59', type: 'assignment', duration: 0 },
    { id: 'e4', title: 'Sprint 3 Demo', course: 'CS 350', color: 'var(--course-green)', date: '2024-12-21', time: '13:00', type: 'class', duration: 90 },
    { id: 'e5', title: 'Final Report Due', course: 'ENG 210', color: 'var(--course-pink)', date: '2024-12-22', time: '23:59', type: 'assignment', duration: 0 },
    { id: 'e6', title: 'DB Lab 8 Due', course: 'CS 210', color: 'var(--course-teal)', date: '2024-12-23', time: '23:59', type: 'assignment', duration: 0 },
    { id: 'e7', title: 'CS 301 Lecture', course: 'CS 301', color: 'var(--course-blue)', date: '2024-12-17', time: '10:00', type: 'class', duration: 75 },
    { id: 'e8', title: 'ML Office Hours', course: 'CS 401', color: 'var(--course-purple)', date: '2024-12-19', time: '15:00', type: 'office-hours', duration: 60 }
  ],

  contentModules: [
    {
      id: 'm1', title: 'Module 1: Foundations of Algorithms', completed: true, progress: 100,
      topics: [
        { title: 'Introduction & Complexity Analysis', type: 'video', duration: '24 min', read: true },
        { title: 'Big-O, Omega, Theta Notation', type: 'reading', duration: '18 min', read: true },
        { title: 'Lecture Slides — Week 1', type: 'file', size: '2.4 MB', read: true },
        { title: 'Practice Problems: Set 1', type: 'assignment', due: '2024-11-15', read: true }
      ]
    },
    {
      id: 'm2', title: 'Module 2: Sorting & Searching', completed: true, progress: 100,
      topics: [
        { title: 'Comparison-Based Sorts', type: 'video', duration: '31 min', read: true },
        { title: 'QuickSort Deep Dive', type: 'video', duration: '28 min', read: true },
        { title: 'Binary Search Trees', type: 'reading', duration: '22 min', read: true },
        { title: 'Assignment 2: Sorting Analysis', type: 'assignment', due: '2024-11-29', read: true }
      ]
    },
    {
      id: 'm3', title: 'Module 3: Graph Algorithms', completed: false, progress: 60,
      topics: [
        { title: 'Graph Representations & BFS', type: 'video', duration: '35 min', read: true },
        { title: 'Depth-First Search & Applications', type: 'video', duration: '29 min', read: true },
        { title: 'Shortest Paths: Dijkstra & Bellman-Ford', type: 'reading', duration: '40 min', read: false },
        { title: 'Lecture Slides — Week 12', type: 'file', size: '3.1 MB', read: false },
        { title: 'Assignment 4: Graph Implementations', type: 'assignment', due: '2024-12-20', read: false }
      ]
    },
    {
      id: 'm4', title: 'Module 4: Dynamic Programming', completed: false, progress: 0,
      topics: [
        { title: 'Introduction to DP', type: 'video', duration: '38 min', read: false },
        { title: 'Memoization vs Tabulation', type: 'reading', duration: '25 min', read: false },
        { title: 'Classic DP Problems', type: 'video', duration: '44 min', read: false },
        { title: 'Final Exam Prep', type: 'quiz', due: '2025-01-10', read: false }
      ]
    }
  ],

  quizzes: [
    { id: 'q1', course: 'CS 401', courseColor: 'var(--course-purple)', title: 'Quiz 3: Neural Networks & Backpropagation', due: '2024-12-18T14:00', timeLimit: 60, attempts: { max: 1, used: 0 }, status: 'upcoming', questions: 20, weight: '15%' },
    { id: 'q2', course: 'CS 210', courseColor: 'var(--course-teal)', title: 'Lab Quiz 8: Query Optimization', due: '2024-12-23T23:59', timeLimit: 45, attempts: { max: 2, used: 0 }, status: 'upcoming', questions: 15, weight: '10%' },
    { id: 'q3', course: 'CS 401', courseColor: 'var(--course-purple)', title: 'Quiz 2: Linear Regression & Classification', due: '2024-12-05T14:00', timeLimit: 60, attempts: { max: 1, used: 1 }, status: 'graded', score: 85, maxScore: 100, questions: 20, weight: '15%' },
    { id: 'q4', course: 'CS 301', courseColor: 'var(--course-blue)', title: 'Quiz 2: Sorting Algorithms Analysis', due: '2024-11-21T14:00', timeLimit: 45, attempts: { max: 1, used: 1 }, status: 'graded', score: 88, maxScore: 100, questions: 15, weight: '10%' },
    { id: 'q5', course: 'MATH 301', courseColor: 'var(--course-orange)', title: 'Midterm: Linear Transformations', due: '2024-11-14T10:00', timeLimit: 90, attempts: { max: 1, used: 1 }, status: 'graded', score: 82, maxScore: 100, questions: 30, weight: '25%' }
  ]
};

window.MockData = MockData;
