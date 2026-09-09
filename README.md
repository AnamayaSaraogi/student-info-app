# Student Information System

## Team Members

* Anamaya Saraogi — Developer
* Arnav Narula — UI Developer
* Parthiv Sushil — JavaScript Developer

## Project Description

The Student Information System is a simple web application developed as part of a collaborative Git workflow exercise. It displays basic information about students, including their names, register numbers, and programme.

The primary objective of this project is to demonstrate collaborative software development using Git and GitHub, including branching, commits, pull requests, merging, and merge conflict resolution.

## Technologies Used

* HTML
* CSS
* JavaScript
* Git
* GitHub
* Visual Studio Code

## Git Branching Strategy

The project uses `main` as the primary branch. The `main` branch contains the stable, integrated version of the application. Team members do not make regular changes directly on `main`; instead, each member works on a separate feature branch and submits the completed work through a Pull Request.

The branches and responsibilities are:

* `feature/ui` — Used by Arnav Narula for improving the page layout, styling, colours, spacing, and overall user interface.
* `feature/javascript` — Used by Parthiv Sushil for adding JavaScript functionality and interactive behaviour.
* `feature/contact` — Used by Anamaya Saraogi for adding or updating the contact information section.
* `main` — Used to combine reviewed and approved changes from the feature branches.

The usual workflow is:

1. Create or switch to the appropriate feature branch.
2. Make changes related only to that feature.
3. Commit the changes with a meaningful commit message.
4. Push the branch to GitHub.
5. Open a Pull Request targeting `main`.
6. Review and merge the Pull Request after confirming that the changes work correctly.

This strategy keeps each person’s work separate, makes the contribution history easier to understand, and reduces the risk of accidentally breaking the stable version of the application.

## Pull Requests Created

Pull Requests are used to review and merge feature branches into the `main` branch. Each Pull Request represents a specific contribution by a team member.

The project includes the following Pull Requests:

* `feature/ui` to `main` — Raised by Arnav Narula for UI improvements, including changes to the page structure, styling, layout, and visual presentation.
* `feature/javascript` to `main` — Raised by Parthiv Sushil for JavaScript functionality and interactive behaviour.
* `feature/contact` to `main` — Raised by Anamaya Saraogi for adding or updating the contact information section.

The Pull Requests allow the team to review the changes before merging them. They also provide a record of who created each contribution, what the contribution was for, and how it was integrated into the project.

## Merge Conflict

A merge conflict was intentionally created to demonstrate how Git handles changes made to the same part of a file by different branches.

The conflict involved the same line in `index.html`, such as the application title or heading. One branch changed the line to one version, while another branch changed the same line to a different version. Because Git could not automatically determine which version should be kept, it marked the file as conflicted.

The conflict was raised when Anamaya Saraogi attempted to merge the `feature/contact` branch into `main` after Arnav Narula’s `feature/ui` branch had already modified the same section of `index.html`. The purpose of the conflict was to demonstrate that two team members had made overlapping changes to the same file and that the changes required manual review before they could be combined safely.

The conflict was resolved by reviewing both versions of the file, discussing which content was required, combining the valid changes where appropriate, removing the Git conflict markers, and testing the resulting application. The resolution was then committed and pushed so that the Pull Request could be completed.

The conflict markers used by Git were:

```text
<<<<<<< HEAD
Version from the current branch
=======
Version from the incoming branch
>>>>>>> feature/contact
```

After resolving the conflict, these markers were removed and only the final approved content remained in `index.html`. The resolution commit documented that the conflicting changes from the two branches had been reviewed and merged successfully.

## How to Run the Application

1. Clone the repository.
2. Open the project folder in Visual Studio Code.
3. Open `index.html` in a web browser.
4. Alternatively, use the Live Server extension in Visual Studio Code to run the application.
