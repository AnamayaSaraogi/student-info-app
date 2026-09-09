# Student Information System

## Project Title
Lab Exercise: Collaborative Git Workflow Using a Simple Web Application

---

## Team Members

* **Anamaya Saraogi** — Team Lead / Developer
* **Arnav Narula** — UI Developer
* **Parthiv Sushil** — JavaScript Developer

---

## Project Description
The Student Information System is a simple web application developed as part of a collaborative Git workflow lab exercise. It displays basic student profile details (Name, Register Number, Programme) with interactive details and a styled layout.

The primary objective of this project is NOT to build a complex web application, but to learn essential collaborative Git workflows: configuring Git locally, creating isolated feature branches, making atomic commits, reviewing Pull Requests, working simultaneously with teammates without overwriting code, and intentionally creating and resolving a merge conflict.

---

## Technologies Used
* **HTML5** – Web page structure
* **CSS3** – Application styling and card layout
* **JavaScript (ES6)** – Front-end button click functionality
* **Git & GitHub** – Version control, feature branching, PR reviews, and conflict management
* **Visual Studio Code** – Code editor

---

## Git Branching Strategy
To ensure team members work collaboratively without directly modifying or overwriting the `main` branch, all feature development takes place on dedicated isolated branches before merging via Pull Requests.

### Branches Created
* `main` – Base production code created by Anamaya Saraogi.
* `feature/ui` – Created by Arnav Narula to add card layout, spacing, and button styles.
* `feature/javascript` – Created by Parthiv Sushil to add the "Show Details" button functionality.
* `feature/contact` – Created by Anamaya Saraogi to add email and phone contact details.
* `feature/student-name` – Created by Arnav Narula to update heading to `<h1>Student Management System</h1>`.
* `feature/app-title` – Created by Parthiv Sushil to update heading to `<h1>MCA Student Information Portal</h1>`.

---

## Pull Requests Created

| Pull Request | Source Branch | Target Branch | Author | Reviewer | Status |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **PR #1** | `feature/ui` | `main` | Arnav Narula | Anamaya Saraogi | Merged |
| **PR #2** | `feature/javascript` | `main` | Parthiv Sushil | Anamaya Saraogi | Merged |
| **PR #3** | `feature/contact` | `main` | Anamaya Saraogi | Anamaya Saraogi | Merged |
| **PR #4** | `feature/student-name` | `main` | Arnav Narula | Anamaya Saraogi | Merged |
| **PR #5** | `feature/app-title` | `main` | Parthiv Sushil | Anamaya Saraogi | Merged (Conflict Resolved) |

---

## Merge Conflict

### What caused the conflict?
A merge conflict was intentionally created between `feature/student-name` (Arnav Narula) and `feature/app-title` (Parthiv Sushil). Both branches were created from the same earlier commit on `main` and edited the **exact same line** in `index.html`:

* **Arnav edited the heading to:** `<h1>Student Management System</h1>`
* **Parthiv edited the heading to:** `<h1>MCA Student Information Portal</h1>`

When Arnav's PR (`feature/student-name`) was merged into `main` first by Anamaya, `main` received the updated heading. When Parthiv attempted to merge `feature/app-title`, GitHub flagged a content conflict because Git could not automatically determine which title to keep.

### How was it resolved?
1. Parthiv updated his local repository by pulling the latest changes from `main` into `feature/app-title` (`git merge main`).
2. Git generated conflict markers in `index.html`:
   ```html
   <<<<<<< HEAD
   <h1>MCA Student Information Portal</h1>
   =======
   <h1>Student Management System</h1>
   >>>>>>> main
   ```
3. Parthiv resolved the conflict by combining both versions into an agreed title:
   ```html
   <h1>Student Management System – MCA</h1>
   ```
4. All conflict markers (`<<<<<<<`, `=======`, `>>>>>>>`) were removed.
5. Parthiv staged the resolved file (`git add index.html`), committed the resolution (`git commit -m "Resolve merge conflict in application title"`), and pushed the changes (`git push origin feature/app-title`).
6. Anamaya Saraogi reviewed and approved the now-mergeable Pull Request.

---

## How to Run the Application

1. Clone the repository to your local machine:
   ```bash
   git clone <repository-url>
   ```
2. Navigate into the project directory:
   ```bash
   cd student-info-app
   ```
3. Open `index.html` directly in any web browser (Chrome, Firefox, Edge, or Safari).
4. Click the **Show Details** button to toggle additional student details.
