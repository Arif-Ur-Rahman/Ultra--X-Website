import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

// material imports


import { A11yModule } from '@angular/cdk/a11y';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { PortalModule } from '@angular/cdk/portal';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { CdkStepperModule } from '@angular/cdk/stepper';
import { CdkTableModule } from '@angular/cdk/table';
import { CdkTreeModule } from '@angular/cdk/tree';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatBadgeModule } from '@angular/material/badge';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatStepperModule } from '@angular/material/stepper';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTreeModule } from '@angular/material/tree';
import { OverlayModule } from '@angular/cdk/overlay';


import { IdeaCardComponent } from './card/idea-card/idea-card.component';
import { PostCommentComponent } from './card/post-comment/post-comment.component';
import { ViewCommentsComponent } from './card/view-comments/view-comments.component';
import { ProjectCardComponent } from './card/project-card/project-card.component';
import { KanbanBoardComponent } from './Board/kanban-board/kanban-board.component';
import { TaskCardComponent } from './card/task-card/task-card.component';
import { IssueCardComponent } from './card/issue-card/issue-card.component';
import { FabButtonComponent } from './button/fab-button/fab-button.component';
import { LeaveSidebarComponent } from './sidebar/leave-sidebar/leave-sidebar.component';
import { TodoSidebarComponent } from './sidebar/todo-sidebar/todo-sidebar.component';
import { WebsiteDashboardSidebarComponent } from './sidebar/website-dashboard-sidebar/website-dashboard-sidebar.component';
import { NotesSidebarComponent } from './sidebar/notes-sidebar/notes-sidebar.component';
import { IdeaSidebarComponent } from './sidebar/idea-sidebar/idea-sidebar.component';
import { AssetSidebarComponent } from './sidebar/asset-sidebar/asset-sidebar.component';
import { RulesRegulationsSidebarComponent } from './sidebar/rules-regulations-sidebar/rules-regulations-sidebar.component';
import { HealthSidebarComponent } from './sidebar/health-sidebar/health-sidebar.component';
import { ProjectSidebarComponent } from './sidebar/project-sidebar/project-sidebar.component';
import { DiscussionSidebarComponent } from './sidebar/discussion-sidebar/discussion-sidebar.component';
import { EmployeeSidebarComponent } from './sidebar/employee-sidebar/employee-sidebar.component';
import { WhiteBoardSidebarComponent } from './sidebar/white-board-sidebar/white-board-sidebar.component';
import { AttendanceSidebarComponent } from './sidebar/attendance-sidebar/attendance-sidebar.component';
import { MainSidebarComponent } from './sidebar/main-sidebar/main-sidebar.component';
import { CommentReplyComponent } from './card/comment-reply/comment-reply.component';
import { EmployeeStatusComponent } from './panel/employee-status/employee-status.component';
import { NoteCardComponent } from './card/note-card/note-card.component';
import { DeleteConfirmationDialogComponent } from './dialog/delete-confirmation-dialog/delete-confirmation-dialog.component';
import { EditDetailsProjectDialogComponent } from './dialog/edit-details-project-dialog/edit-details-project-dialog.component';
import { ViewDetailsProjectDialogComponent } from './dialog/view-details-project-dialog/view-details-project-dialog.component';
import { RaiseIssueDialogComponent } from './dialog/raise-issue-dialog/raise-issue-dialog.component';
import { CreateNoteDialogComponent } from './dialog/create-note-dialog/create-note-dialog.component';
import { MakeArchiveConfirmationDialogComponent } from './dialog/make-archive-confirmation-dialog/make-archive-confirmation-dialog.component';
import { ViewDetailsNoteDialogComponent } from './dialog/view-details-note-dialog/view-details-note-dialog.component';
import { ShareEditIdeaDialogComponent } from './dialog/share-edit-idea-dialog/share-edit-idea-dialog.component';
import { CreateEditTaskDialogComponent } from './dialog/create-edit-task-dialog/create-edit-task-dialog.component';
import { PostReplyComponent } from './card/post-reply/post-reply.component';
import { UploadRnrFileComponent } from './dialog/upload-rnr-file/upload-rnr-file.component';
import { AssignTaskToEngineersComponent } from './dialog/assign-task-to-engineers/assign-task-to-engineers.component';
import { EvaluationSidebarComponent } from './sidebar/evaluation-sidebar/evaluation-sidebar.component';
import { AddEmployeeComponent } from './dialog/add-employee/add-employee.component';
import { AddMemberDialogComponent } from './dialog/add-member-dialog/add-member-dialog.component';
import { UpdateProjectComponent } from './dialog/update-project/update-project.component';
import { BoardItemComponent } from './Board/board-item/board-item.component';
import { BoardCommentComponent } from './Board/board-comment/board-comment.component';
import { DialogComponent } from './dialog/kanbanBoard/dialog/dialog.component';
import { AddTaskComponent } from './dialog/kanbanBoard/add-task/add-task.component';
import { ColorPanelComponent } from './Board/color-panel/color-panel.component';
import { CreateRolePriorityTechComponent } from './dialog/create-role-priority-tech/create-role-priority-tech.component';
import { UpdateRolePriorityTechComponent } from './dialog/update-role-priority-tech/update-role-priority-tech.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';



@NgModule({
  declarations: [
    IdeaCardComponent,
    PostCommentComponent,
    ViewCommentsComponent,
    ProjectCardComponent,
    KanbanBoardComponent,
    TaskCardComponent,
    IssueCardComponent,
    FabButtonComponent,
    LeaveSidebarComponent,
    TodoSidebarComponent,
    WebsiteDashboardSidebarComponent,
    NotesSidebarComponent,
    IdeaSidebarComponent,
    AssetSidebarComponent,
    RulesRegulationsSidebarComponent,
    HealthSidebarComponent,
    ProjectSidebarComponent,
    DiscussionSidebarComponent,
    EmployeeSidebarComponent,
    WhiteBoardSidebarComponent,
    AttendanceSidebarComponent,
    MainSidebarComponent,
    CommentReplyComponent,
    EmployeeStatusComponent,
    NoteCardComponent,
    DeleteConfirmationDialogComponent,
    EditDetailsProjectDialogComponent,
    ViewDetailsProjectDialogComponent,
    RaiseIssueDialogComponent,
    CreateNoteDialogComponent,
    MakeArchiveConfirmationDialogComponent,
    ViewDetailsNoteDialogComponent,
    ShareEditIdeaDialogComponent,
    CreateEditTaskDialogComponent,
    PostReplyComponent,
    UploadRnrFileComponent,
    AssignTaskToEngineersComponent,
    EvaluationSidebarComponent,
    AddEmployeeComponent,
    AddMemberDialogComponent,
    UpdateProjectComponent,
    BoardItemComponent,
    BoardCommentComponent,
    DialogComponent,
    AddTaskComponent,
    ColorPanelComponent,
    CreateRolePriorityTechComponent,
    UpdateRolePriorityTechComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,

    // * MATERIAL IMPORTS
    A11yModule,
    CdkAccordionModule,
    ClipboardModule,
    CdkStepperModule,
    CdkTableModule,
    CdkTreeModule,
    DragDropModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    OverlayModule,
    PortalModule,
    ScrollingModule,
    NgMultiSelectDropDownModule
  ],
  exports: [
    IdeaCardComponent,
    PostCommentComponent,
    ViewCommentsComponent,
    ProjectCardComponent,
    KanbanBoardComponent,
    TaskCardComponent,
    IssueCardComponent,
    FabButtonComponent,
    LeaveSidebarComponent,
    TodoSidebarComponent,
    WebsiteDashboardSidebarComponent,
    NotesSidebarComponent,
    IdeaSidebarComponent,
    AssetSidebarComponent,
    RulesRegulationsSidebarComponent,
    HealthSidebarComponent,
    ProjectSidebarComponent,
    DiscussionSidebarComponent,
    EmployeeSidebarComponent,
    WhiteBoardSidebarComponent,
    AttendanceSidebarComponent,
    MainSidebarComponent,
    EvaluationSidebarComponent,
    CommentReplyComponent,
    EmployeeStatusComponent,
    NoteCardComponent,
    DeleteConfirmationDialogComponent,
    EditDetailsProjectDialogComponent,
    ViewDetailsProjectDialogComponent,
    RaiseIssueDialogComponent,
    CreateNoteDialogComponent,
    MakeArchiveConfirmationDialogComponent,
    CreateEditTaskDialogComponent,
    PostReplyComponent,
    UploadRnrFileComponent,
    AssignTaskToEngineersComponent,
    AddEmployeeComponent,
    UpdateProjectComponent,
    DialogComponent,
    AddTaskComponent,
    CreateRolePriorityTechComponent
  ]
})
export class SharedModule { }
