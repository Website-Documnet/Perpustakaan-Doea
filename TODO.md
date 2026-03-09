# TODO - Enhance Search Functionality

## Task: Add search capability for school books in main search bar

### Plan:
1. [x] Analyze current search functionality in script.js
2. [x] Modify search function to include school books from booksByKelas
3. [x] Update display function to show search results from both arrays
4. [x] Test the implementation

### Implementation Details:
- Current: Search only searches `books` array
- New: Search will also search `booksByKelas["X"]`, `booksByKelas["XI"]`, `booksByKelas["XII"]`
- When user searches "ekonomi", it should find:
  - General non-fiction books about economy
  - "Ekonomi Kelas XI", "Ekonomi Kelas XII" from school books
- Search will match against title and author

### Status: ✅ COMPLETED

