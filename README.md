# 🚀 Performance Testing Suite: Testimonial API

## Overview
**K6-Performance-Testing-2026** is an automated performance testing framework for the **Testimonial API** from Ndosi Test Automation. It tests a complete CRUD workflow: Login → Get Profile → Create Testimonial → Update Testimonial → Delete Testimonial.

---

## Installation

### Prerequisites
- **k6**: v0.49.0 or later
- **Git**: v2.40+

### Install k6
```bash
# Windows (Chocolatey)
choco install k6

# MacOS (Homebrew)
brew install k6

# Linux
sudo apt-get install k6
```

### Clone the Repository
```bash
git clone https://github.com/the7thsage376/K6-Performance-Testing2026.git
cd K6-Performance-2026
```

### Set Environment Variables (Optional)
```bash
# Windows (PowerShell)
$env:USER_EMAIL = "your-email@example.com"
$env:USER_PASSWORD = "your-password"

# Linux/MacOS
export USER_EMAIL="your-email@example.com"
export USER_PASSWORD="your-password"
```

---

## Running Tests

### Run Full Test Suite
```bash
k6 run tests/06_testSuite.js
```

### Run Individual Tests
```bash
k6 run tests/01_loginTest.js
k6 run tests/02_getProfileTest.js
k6 run tests/03_postTestimonialTest.js
k6 run tests/04_updateTestimonialTest.js
k6 run tests/05_deleteTestimonialTest.js
```

### Run with Custom Load
```bash
k6 run -u 10 -d 30s tests/06_testSuite.js
# -u: Number of virtual users
# -d: Test duration
```

---