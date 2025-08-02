export interface Problem {
  id: number;
  title: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  category: string;
  leetcodeUrl: string;
  premium: boolean;
}

export const neetcode150: Problem[] = [
  // Arrays & Hashing
  { id: 1, title: "Contains Duplicate", difficulty: "Easy", category: "Arrays & Hashing", leetcodeUrl: "https://leetcode.com/problems/contains-duplicate/", premium: false },
  { id: 2, title: "Valid Anagram", difficulty: "Easy", category: "Arrays & Hashing", leetcodeUrl: "https://leetcode.com/problems/valid-anagram/", premium: false },
  { id: 3, title: "Two Sum", difficulty: "Easy", category: "Arrays & Hashing", leetcodeUrl: "https://leetcode.com/problems/two-sum/", premium: false },
  { id: 4, title: "Group Anagrams", difficulty: "Medium", category: "Arrays & Hashing", leetcodeUrl: "https://leetcode.com/problems/group-anagrams/", premium: false },
  { id: 5, title: "Top K Frequent Elements", difficulty: "Medium", category: "Arrays & Hashing", leetcodeUrl: "https://leetcode.com/problems/top-k-frequent-elements/", premium: false },
  { id: 6, title: "Product of Array Except Self", difficulty: "Medium", category: "Arrays & Hashing", leetcodeUrl: "https://leetcode.com/problems/product-of-array-except-self/", premium: false },
  { id: 7, title: "Valid Sudoku", difficulty: "Medium", category: "Arrays & Hashing", leetcodeUrl: "https://leetcode.com/problems/valid-sudoku/", premium: false },
  { id: 8, title: "Encode and Decode Strings", difficulty: "Medium", category: "Arrays & Hashing", leetcodeUrl: "https://leetcode.com/problems/encode-and-decode-strings/", premium: true },
  { id: 9, title: "Longest Consecutive Sequence", difficulty: "Medium", category: "Arrays & Hashing", leetcodeUrl: "https://leetcode.com/problems/longest-consecutive-sequence/", premium: false },

  // Two Pointers
  { id: 10, title: "Valid Palindrome", difficulty: "Easy", category: "Two Pointers", leetcodeUrl: "https://leetcode.com/problems/valid-palindrome/", premium: false },
  { id: 11, title: "Two Sum II - Input Array Is Sorted", difficulty: "Medium", category: "Two Pointers", leetcodeUrl: "https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/", premium: false },
  { id: 12, title: "3Sum", difficulty: "Medium", category: "Two Pointers", leetcodeUrl: "https://leetcode.com/problems/3sum/", premium: false },
  { id: 13, title: "Container With Most Water", difficulty: "Medium", category: "Two Pointers", leetcodeUrl: "https://leetcode.com/problems/container-with-most-water/", premium: false },
  { id: 14, title: "Trapping Rain Water", difficulty: "Hard", category: "Two Pointers", leetcodeUrl: "https://leetcode.com/problems/trapping-rain-water/", premium: false },

  // Sliding Window
  { id: 15, title: "Best Time to Buy and Sell Stock", difficulty: "Easy", category: "Sliding Window", leetcodeUrl: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/", premium: false },
  { id: 16, title: "Longest Substring Without Repeating Characters", difficulty: "Medium", category: "Sliding Window", leetcodeUrl: "https://leetcode.com/problems/longest-substring-without-repeating-characters/", premium: false },
  { id: 17, title: "Longest Repeating Character Replacement", difficulty: "Medium", category: "Sliding Window", leetcodeUrl: "https://leetcode.com/problems/longest-repeating-character-replacement/", premium: false },
  { id: 18, title: "Permutation in String", difficulty: "Medium", category: "Sliding Window", leetcodeUrl: "https://leetcode.com/problems/permutation-in-string/", premium: false },
  { id: 19, title: "Minimum Window Substring", difficulty: "Hard", category: "Sliding Window", leetcodeUrl: "https://leetcode.com/problems/minimum-window-substring/", premium: false },
  { id: 20, title: "Sliding Window Maximum", difficulty: "Hard", category: "Sliding Window", leetcodeUrl: "https://leetcode.com/problems/sliding-window-maximum/", premium: false },

  // Stack
  { id: 21, title: "Valid Parentheses", difficulty: "Easy", category: "Stack", leetcodeUrl: "https://leetcode.com/problems/valid-parentheses/", premium: false },
  { id: 22, title: "Min Stack", difficulty: "Medium", category: "Stack", leetcodeUrl: "https://leetcode.com/problems/min-stack/", premium: false },
  { id: 23, title: "Evaluate Reverse Polish Notation", difficulty: "Medium", category: "Stack", leetcodeUrl: "https://leetcode.com/problems/evaluate-reverse-polish-notation/", premium: false },
  { id: 24, title: "Generate Parentheses", difficulty: "Medium", category: "Stack", leetcodeUrl: "https://leetcode.com/problems/generate-parentheses/", premium: false },
  { id: 25, title: "Daily Temperatures", difficulty: "Medium", category: "Stack", leetcodeUrl: "https://leetcode.com/problems/daily-temperatures/", premium: false },
  { id: 26, title: "Car Fleet", difficulty: "Medium", category: "Stack", leetcodeUrl: "https://leetcode.com/problems/car-fleet/", premium: false },
  { id: 27, title: "Largest Rectangle in Histogram", difficulty: "Hard", category: "Stack", leetcodeUrl: "https://leetcode.com/problems/largest-rectangle-in-histogram/", premium: false },

  // Binary Search
  { id: 28, title: "Binary Search", difficulty: "Easy", category: "Binary Search", leetcodeUrl: "https://leetcode.com/problems/binary-search/", premium: false },
  { id: 29, title: "Search a 2D Matrix", difficulty: "Medium", category: "Binary Search", leetcodeUrl: "https://leetcode.com/problems/search-a-2d-matrix/", premium: false },
  { id: 30, title: "Koko Eating Bananas", difficulty: "Medium", category: "Binary Search", leetcodeUrl: "https://leetcode.com/problems/koko-eating-bananas/", premium: false },
  { id: 31, title: "Find Minimum in Rotated Sorted Array", difficulty: "Medium", category: "Binary Search", leetcodeUrl: "https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/", premium: false },
  { id: 32, title: "Search in Rotated Sorted Array", difficulty: "Medium", category: "Binary Search", leetcodeUrl: "https://leetcode.com/problems/search-in-rotated-sorted-array/", premium: false },
  { id: 33, title: "Time Based Key-Value Store", difficulty: "Medium", category: "Binary Search", leetcodeUrl: "https://leetcode.com/problems/time-based-key-value-store/", premium: false },
  { id: 34, title: "Median of Two Sorted Arrays", difficulty: "Hard", category: "Binary Search", leetcodeUrl: "https://leetcode.com/problems/median-of-two-sorted-arrays/", premium: false },

  // Linked List
  { id: 35, title: "Reverse Linked List", difficulty: "Easy", category: "Linked List", leetcodeUrl: "https://leetcode.com/problems/reverse-linked-list/", premium: false },
  { id: 36, title: "Merge Two Sorted Lists", difficulty: "Easy", category: "Linked List", leetcodeUrl: "https://leetcode.com/problems/merge-two-sorted-lists/", premium: false },
  { id: 37, title: "Reorder List", difficulty: "Medium", category: "Linked List", leetcodeUrl: "https://leetcode.com/problems/reorder-list/", premium: false },
  { id: 38, title: "Remove Nth Node From End of List", difficulty: "Medium", category: "Linked List", leetcodeUrl: "https://leetcode.com/problems/remove-nth-node-from-end-of-list/", premium: false },
  { id: 39, title: "Copy List with Random Pointer", difficulty: "Medium", category: "Linked List", leetcodeUrl: "https://leetcode.com/problems/copy-list-with-random-pointer/", premium: false },
  { id: 40, title: "Add Two Numbers", difficulty: "Medium", category: "Linked List", leetcodeUrl: "https://leetcode.com/problems/add-two-numbers/", premium: false },
  { id: 41, title: "Linked List Cycle", difficulty: "Easy", category: "Linked List", leetcodeUrl: "https://leetcode.com/problems/linked-list-cycle/", premium: false },
  { id: 42, title: "Find the Duplicate Number", difficulty: "Medium", category: "Linked List", leetcodeUrl: "https://leetcode.com/problems/find-the-duplicate-number/", premium: false },
  { id: 43, title: "LRU Cache", difficulty: "Medium", category: "Linked List", leetcodeUrl: "https://leetcode.com/problems/lru-cache/", premium: false },
  { id: 44, title: "Merge K Sorted Lists", difficulty: "Hard", category: "Linked List", leetcodeUrl: "https://leetcode.com/problems/merge-k-sorted-lists/", premium: false },
  { id: 45, title: "Reverse Nodes in k-Group", difficulty: "Hard", category: "Linked List", leetcodeUrl: "https://leetcode.com/problems/reverse-nodes-in-k-group/", premium: false },

  // Trees
  { id: 46, title: "Invert Binary Tree", difficulty: "Easy", category: "Trees", leetcodeUrl: "https://leetcode.com/problems/invert-binary-tree/", premium: false },
  { id: 47, title: "Maximum Depth of Binary Tree", difficulty: "Easy", category: "Trees", leetcodeUrl: "https://leetcode.com/problems/maximum-depth-of-binary-tree/", premium: false },
  { id: 48, title: "Diameter of Binary Tree", difficulty: "Easy", category: "Trees", leetcodeUrl: "https://leetcode.com/problems/diameter-of-binary-tree/", premium: false },
  { id: 49, title: "Balanced Binary Tree", difficulty: "Easy", category: "Trees", leetcodeUrl: "https://leetcode.com/problems/balanced-binary-tree/", premium: false },
  { id: 50, title: "Same Tree", difficulty: "Easy", category: "Trees", leetcodeUrl: "https://leetcode.com/problems/same-tree/", premium: false },
  { id: 51, title: "Subtree of Another Tree", difficulty: "Easy", category: "Trees", leetcodeUrl: "https://leetcode.com/problems/subtree-of-another-tree/", premium: false },
  { id: 52, title: "Lowest Common Ancestor of a Binary Search Tree", difficulty: "Medium", category: "Trees", leetcodeUrl: "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/", premium: false },
  { id: 53, title: "Binary Tree Level Order Traversal", difficulty: "Medium", category: "Trees", leetcodeUrl: "https://leetcode.com/problems/binary-tree-level-order-traversal/", premium: false },
  { id: 54, title: "Binary Tree Right Side View", difficulty: "Medium", category: "Trees", leetcodeUrl: "https://leetcode.com/problems/binary-tree-right-side-view/", premium: false },
  { id: 55, title: "Count Good Nodes in Binary Tree", difficulty: "Medium", category: "Trees", leetcodeUrl: "https://leetcode.com/problems/count-good-nodes-in-binary-tree/", premium: false },
  { id: 56, title: "Validate Binary Search Tree", difficulty: "Medium", category: "Trees", leetcodeUrl: "https://leetcode.com/problems/validate-binary-search-tree/", premium: false },
  { id: 57, title: "Kth Smallest Element in a BST", difficulty: "Medium", category: "Trees", leetcodeUrl: "https://leetcode.com/problems/kth-smallest-element-in-a-bst/", premium: false },
  { id: 58, title: "Construct Binary Tree from Preorder and Inorder Traversal", difficulty: "Medium", category: "Trees", leetcodeUrl: "https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/", premium: false },
  { id: 59, title: "Binary Tree Maximum Path Sum", difficulty: "Hard", category: "Trees", leetcodeUrl: "https://leetcode.com/problems/binary-tree-maximum-path-sum/", premium: false },
  { id: 60, title: "Serialize and Deserialize Binary Tree", difficulty: "Hard", category: "Trees", leetcodeUrl: "https://leetcode.com/problems/serialize-and-deserialize-binary-tree/", premium: false },

  // Tries
  { id: 61, title: "Implement Trie (Prefix Tree)", difficulty: "Medium", category: "Tries", leetcodeUrl: "https://leetcode.com/problems/implement-trie-prefix-tree/", premium: false },
  { id: 62, title: "Design Add and Search Words Data Structure", difficulty: "Medium", category: "Tries", leetcodeUrl: "https://leetcode.com/problems/design-add-and-search-words-data-structure/", premium: false },
  { id: 63, title: "Word Search II", difficulty: "Hard", category: "Tries", leetcodeUrl: "https://leetcode.com/problems/word-search-ii/", premium: false },

  // Heap / Priority Queue
  { id: 64, title: "Kth Largest Element in a Stream", difficulty: "Easy", category: "Heap / Priority Queue", leetcodeUrl: "https://leetcode.com/problems/kth-largest-element-in-a-stream/", premium: false },
  { id: 65, title: "Last Stone Weight", difficulty: "Easy", category: "Heap / Priority Queue", leetcodeUrl: "https://leetcode.com/problems/last-stone-weight/", premium: false },
  { id: 66, title: "K Closest Points to Origin", difficulty: "Medium", category: "Heap / Priority Queue", leetcodeUrl: "https://leetcode.com/problems/k-closest-points-to-origin/", premium: false },
  { id: 67, title: "Kth Largest Element in an Array", difficulty: "Medium", category: "Heap / Priority Queue", leetcodeUrl: "https://leetcode.com/problems/kth-largest-element-in-an-array/", premium: false },
  { id: 68, title: "Task Scheduler", difficulty: "Medium", category: "Heap / Priority Queue", leetcodeUrl: "https://leetcode.com/problems/task-scheduler/", premium: false },
  { id: 69, title: "Design Twitter", difficulty: "Medium", category: "Heap / Priority Queue", leetcodeUrl: "https://leetcode.com/problems/design-twitter/", premium: false },
  { id: 70, title: "Find Median from Data Stream", difficulty: "Hard", category: "Heap / Priority Queue", leetcodeUrl: "https://leetcode.com/problems/find-median-from-data-stream/", premium: false },

  // Backtracking
  { id: 71, title: "Subsets", difficulty: "Medium", category: "Backtracking", leetcodeUrl: "https://leetcode.com/problems/subsets/", premium: false },
  { id: 72, title: "Combination Sum", difficulty: "Medium", category: "Backtracking", leetcodeUrl: "https://leetcode.com/problems/combination-sum/", premium: false },
  { id: 73, title: "Permutations", difficulty: "Medium", category: "Backtracking", leetcodeUrl: "https://leetcode.com/problems/permutations/", premium: false },
  { id: 74, title: "Subsets II", difficulty: "Medium", category: "Backtracking", leetcodeUrl: "https://leetcode.com/problems/subsets-ii/", premium: false },
  { id: 75, title: "Combination Sum II", difficulty: "Medium", category: "Backtracking", leetcodeUrl: "https://leetcode.com/problems/combination-sum-ii/", premium: false },
  { id: 76, title: "Word Search", difficulty: "Medium", category: "Backtracking", leetcodeUrl: "https://leetcode.com/problems/word-search/", premium: false },
  { id: 77, title: "Palindrome Partitioning", difficulty: "Medium", category: "Backtracking", leetcodeUrl: "https://leetcode.com/problems/palindrome-partitioning/", premium: false },
  { id: 78, title: "Letter Combinations of a Phone Number", difficulty: "Medium", category: "Backtracking", leetcodeUrl: "https://leetcode.com/problems/letter-combinations-of-a-phone-number/", premium: false },
  { id: 79, title: "N-Queens", difficulty: "Hard", category: "Backtracking", leetcodeUrl: "https://leetcode.com/problems/n-queens/", premium: false },

  // Graphs
  { id: 80, title: "Number of Islands", difficulty: "Medium", category: "Graphs", leetcodeUrl: "https://leetcode.com/problems/number-of-islands/", premium: false },
  { id: 81, title: "Clone Graph", difficulty: "Medium", category: "Graphs", leetcodeUrl: "https://leetcode.com/problems/clone-graph/", premium: false },
  { id: 82, title: "Max Area of Island", difficulty: "Medium", category: "Graphs", leetcodeUrl: "https://leetcode.com/problems/max-area-of-island/", premium: false },
  { id: 83, title: "Pacific Atlantic Water Flow", difficulty: "Medium", category: "Graphs", leetcodeUrl: "https://leetcode.com/problems/pacific-atlantic-water-flow/", premium: false },
  { id: 84, title: "Surrounded Regions", difficulty: "Medium", category: "Graphs", leetcodeUrl: "https://leetcode.com/problems/surrounded-regions/", premium: false },
  { id: 85, title: "Rotting Oranges", difficulty: "Medium", category: "Graphs", leetcodeUrl: "https://leetcode.com/problems/rotting-oranges/", premium: false },
  { id: 86, title: "Walls and Gates", difficulty: "Medium", category: "Graphs", leetcodeUrl: "https://leetcode.com/problems/walls-and-gates/", premium: true },
  { id: 87, title: "Course Schedule", difficulty: "Medium", category: "Graphs", leetcodeUrl: "https://leetcode.com/problems/course-schedule/", premium: false },
  { id: 88, title: "Course Schedule II", difficulty: "Medium", category: "Graphs", leetcodeUrl: "https://leetcode.com/problems/course-schedule-ii/", premium: false },
  { id: 89, title: "Redundant Connection", difficulty: "Medium", category: "Graphs", leetcodeUrl: "https://leetcode.com/problems/redundant-connection/", premium: false },
  { id: 90, title: "Number of Connected Components in an Undirected Graph", difficulty: "Medium", category: "Graphs", leetcodeUrl: "https://leetcode.com/problems/number-of-connected-components-in-an-undirected-graph/", premium: true },
  { id: 91, title: "Graph Valid Tree", difficulty: "Medium", category: "Graphs", leetcodeUrl: "https://leetcode.com/problems/graph-valid-tree/", premium: true },
  { id: 92, title: "Word Ladder", difficulty: "Hard", category: "Graphs", leetcodeUrl: "https://leetcode.com/problems/word-ladder/", premium: false },

  // Advanced Graphs
  { id: 93, title: "Reconstruct Itinerary", difficulty: "Hard", category: "Advanced Graphs", leetcodeUrl: "https://leetcode.com/problems/reconstruct-itinerary/", premium: false },
  { id: 94, title: "Min Cost to Connect All Points", difficulty: "Medium", category: "Advanced Graphs", leetcodeUrl: "https://leetcode.com/problems/min-cost-to-connect-all-points/", premium: false },
  { id: 95, title: "Network Delay Time", difficulty: "Medium", category: "Advanced Graphs", leetcodeUrl: "https://leetcode.com/problems/network-delay-time/", premium: false },
  { id: 96, title: "Swim in Rising Water", difficulty: "Hard", category: "Advanced Graphs", leetcodeUrl: "https://leetcode.com/problems/swim-in-rising-water/", premium: false },
  { id: 97, title: "Alien Dictionary", difficulty: "Hard", category: "Advanced Graphs", leetcodeUrl: "https://leetcode.com/problems/alien-dictionary/", premium: true },
  { id: 98, title: "Cheapest Flights Within K Stops", difficulty: "Medium", category: "Advanced Graphs", leetcodeUrl: "https://leetcode.com/problems/cheapest-flights-within-k-stops/", premium: false },

  // 1-D Dynamic Programming
  { id: 99, title: "Climbing Stairs", difficulty: "Easy", category: "1-D Dynamic Programming", leetcodeUrl: "https://leetcode.com/problems/climbing-stairs/", premium: false },
  { id: 100, title: "Min Cost Climbing Stairs", difficulty: "Easy", category: "1-D Dynamic Programming", leetcodeUrl: "https://leetcode.com/problems/min-cost-climbing-stairs/", premium: false },
  { id: 101, title: "House Robber", difficulty: "Medium", category: "1-D Dynamic Programming", leetcodeUrl: "https://leetcode.com/problems/house-robber/", premium: false },
  { id: 102, title: "House Robber II", difficulty: "Medium", category: "1-D Dynamic Programming", leetcodeUrl: "https://leetcode.com/problems/house-robber-ii/", premium: false },
  { id: 103, title: "Longest Palindromic Substring", difficulty: "Medium", category: "1-D Dynamic Programming", leetcodeUrl: "https://leetcode.com/problems/longest-palindromic-substring/", premium: false },
  { id: 104, title: "Palindromic Substrings", difficulty: "Medium", category: "1-D Dynamic Programming", leetcodeUrl: "https://leetcode.com/problems/palindromic-substrings/", premium: false },
  { id: 105, title: "Decode Ways", difficulty: "Medium", category: "1-D Dynamic Programming", leetcodeUrl: "https://leetcode.com/problems/decode-ways/", premium: false },
  { id: 106, title: "Coin Change", difficulty: "Medium", category: "1-D Dynamic Programming", leetcodeUrl: "https://leetcode.com/problems/coin-change/", premium: false },
  { id: 107, title: "Maximum Product Subarray", difficulty: "Medium", category: "1-D Dynamic Programming", leetcodeUrl: "https://leetcode.com/problems/maximum-product-subarray/", premium: false },
  { id: 108, title: "Word Break", difficulty: "Medium", category: "1-D Dynamic Programming", leetcodeUrl: "https://leetcode.com/problems/word-break/", premium: false },
  { id: 109, title: "Longest Increasing Subsequence", difficulty: "Medium", category: "1-D Dynamic Programming", leetcodeUrl: "https://leetcode.com/problems/longest-increasing-subsequence/", premium: false },
  { id: 110, title: "Partition Equal Subset Sum", difficulty: "Medium", category: "1-D Dynamic Programming", leetcodeUrl: "https://leetcode.com/problems/partition-equal-subset-sum/", premium: false },

  // 2-D Dynamic Programming
  { id: 111, title: "Unique Paths", difficulty: "Medium", category: "2-D Dynamic Programming", leetcodeUrl: "https://leetcode.com/problems/unique-paths/", premium: false },
  { id: 112, title: "Longest Common Subsequence", difficulty: "Medium", category: "2-D Dynamic Programming", leetcodeUrl: "https://leetcode.com/problems/longest-common-subsequence/", premium: false },
  { id: 113, title: "Best Time to Buy and Sell Stock With Cooldown", difficulty: "Medium", category: "2-D Dynamic Programming", leetcodeUrl: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/", premium: false },
  { id: 114, title: "Coin Change II", difficulty: "Medium", category: "2-D Dynamic Programming", leetcodeUrl: "https://leetcode.com/problems/coin-change-ii/", premium: false },
  { id: 115, title: "Target Sum", difficulty: "Medium", category: "2-D Dynamic Programming", leetcodeUrl: "https://leetcode.com/problems/target-sum/", premium: false },
  { id: 116, title: "Interleaving String", difficulty: "Medium", category: "2-D Dynamic Programming", leetcodeUrl: "https://leetcode.com/problems/interleaving-string/", premium: false },
  { id: 117, title: "Longest Increasing Path in a Matrix", difficulty: "Hard", category: "2-D Dynamic Programming", leetcodeUrl: "https://leetcode.com/problems/longest-increasing-path-in-a-matrix/", premium: false },
  { id: 118, title: "Distinct Subsequences", difficulty: "Hard", category: "2-D Dynamic Programming", leetcodeUrl: "https://leetcode.com/problems/distinct-subsequences/", premium: false },
  { id: 119, title: "Edit Distance", difficulty: "Hard", category: "2-D Dynamic Programming", leetcodeUrl: "https://leetcode.com/problems/edit-distance/", premium: false },
  { id: 120, title: "Burst Balloons", difficulty: "Hard", category: "2-D Dynamic Programming", leetcodeUrl: "https://leetcode.com/problems/burst-balloons/", premium: false },
  { id: 121, title: "Regular Expression Matching", difficulty: "Hard", category: "2-D Dynamic Programming", leetcodeUrl: "https://leetcode.com/problems/regular-expression-matching/", premium: false },

  // Greedy
  { id: 122, title: "Maximum Subarray", difficulty: "Medium", category: "Greedy", leetcodeUrl: "https://leetcode.com/problems/maximum-subarray/", premium: false },
  { id: 123, title: "Jump Game", difficulty: "Medium", category: "Greedy", leetcodeUrl: "https://leetcode.com/problems/jump-game/", premium: false },
  { id: 124, title: "Jump Game II", difficulty: "Medium", category: "Greedy", leetcodeUrl: "https://leetcode.com/problems/jump-game-ii/", premium: false },
  { id: 125, title: "Gas Station", difficulty: "Medium", category: "Greedy", leetcodeUrl: "https://leetcode.com/problems/gas-station/", premium: false },
  { id: 126, title: "Hand of Straights", difficulty: "Medium", category: "Greedy", leetcodeUrl: "https://leetcode.com/problems/hand-of-straights/", premium: false },
  { id: 127, title: "Merge Triplets to Form Target Triplet", difficulty: "Medium", category: "Greedy", leetcodeUrl: "https://leetcode.com/problems/merge-triplets-to-form-target-triplet/", premium: false },
  { id: 128, title: "Partition Labels", difficulty: "Medium", category: "Greedy", leetcodeUrl: "https://leetcode.com/problems/partition-labels/", premium: false },
  { id: 129, title: "Valid Parenthesis String", difficulty: "Medium", category: "Greedy", leetcodeUrl: "https://leetcode.com/problems/valid-parenthesis-string/", premium: false },

  // Intervals
  { id: 130, title: "Insert Interval", difficulty: "Medium", category: "Intervals", leetcodeUrl: "https://leetcode.com/problems/insert-interval/", premium: false },
  { id: 131, title: "Merge Intervals", difficulty: "Medium", category: "Intervals", leetcodeUrl: "https://leetcode.com/problems/merge-intervals/", premium: false },
  { id: 132, title: "Non-overlapping Intervals", difficulty: "Medium", category: "Intervals", leetcodeUrl: "https://leetcode.com/problems/non-overlapping-intervals/", premium: false },
  { id: 133, title: "Meeting Rooms", difficulty: "Easy", category: "Intervals", leetcodeUrl: "https://leetcode.com/problems/meeting-rooms/", premium: true },
  { id: 134, title: "Meeting Rooms II", difficulty: "Medium", category: "Intervals", leetcodeUrl: "https://leetcode.com/problems/meeting-rooms-ii/", premium: true },
  { id: 135, title: "Minimum Interval to Include Each Query", difficulty: "Hard", category: "Intervals", leetcodeUrl: "https://leetcode.com/problems/minimum-interval-to-include-each-query/", premium: false },

  // Math & Geometry
  { id: 136, title: "Rotate Image", difficulty: "Medium", category: "Math & Geometry", leetcodeUrl: "https://leetcode.com/problems/rotate-image/", premium: false },
  { id: 137, title: "Spiral Matrix", difficulty: "Medium", category: "Math & Geometry", leetcodeUrl: "https://leetcode.com/problems/spiral-matrix/", premium: false },
  { id: 138, title: "Set Matrix Zeroes", difficulty: "Medium", category: "Math & Geometry", leetcodeUrl: "https://leetcode.com/problems/set-matrix-zeroes/", premium: false },
  { id: 139, title: "Happy Number", difficulty: "Easy", category: "Math & Geometry", leetcodeUrl: "https://leetcode.com/problems/happy-number/", premium: false },
  { id: 140, title: "Plus One", difficulty: "Easy", category: "Math & Geometry", leetcodeUrl: "https://leetcode.com/problems/plus-one/", premium: false },
  { id: 141, title: "Pow(x, n)", difficulty: "Medium", category: "Math & Geometry", leetcodeUrl: "https://leetcode.com/problems/powx-n/", premium: false },
  { id: 142, title: "Multiply Strings", difficulty: "Medium", category: "Math & Geometry", leetcodeUrl: "https://leetcode.com/problems/multiply-strings/", premium: false },
  { id: 143, title: "Detect Squares", difficulty: "Medium", category: "Math & Geometry", leetcodeUrl: "https://leetcode.com/problems/detect-squares/", premium: false },

  // Bit Manipulation
  { id: 144, title: "Single Number", difficulty: "Easy", category: "Bit Manipulation", leetcodeUrl: "https://leetcode.com/problems/single-number/", premium: false },
  { id: 145, title: "Number of 1 Bits", difficulty: "Easy", category: "Bit Manipulation", leetcodeUrl: "https://leetcode.com/problems/number-of-1-bits/", premium: false },
  { id: 146, title: "Counting Bits", difficulty: "Easy", category: "Bit Manipulation", leetcodeUrl: "https://leetcode.com/problems/counting-bits/", premium: false },
  { id: 147, title: "Reverse Bits", difficulty: "Easy", category: "Bit Manipulation", leetcodeUrl: "https://leetcode.com/problems/reverse-bits/", premium: false },
  { id: 148, title: "Missing Number", difficulty: "Easy", category: "Bit Manipulation", leetcodeUrl: "https://leetcode.com/problems/missing-number/", premium: false },
  { id: 149, title: "Sum of Two Integers", difficulty: "Medium", category: "Bit Manipulation", leetcodeUrl: "https://leetcode.com/problems/sum-of-two-integers/", premium: false },
  { id: 150, title: "Reverse Integer", difficulty: "Medium", category: "Bit Manipulation", leetcodeUrl: "https://leetcode.com/problems/reverse-integer/", premium: false },
]; 