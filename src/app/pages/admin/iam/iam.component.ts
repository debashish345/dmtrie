import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Permission } from '../../../types/permission.model';
import { Role } from '../../../types/role.model';
import { User } from '../../../types/user.model';

import { MatTabsModule } from '@angular/material/tabs';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar'; // For notifications
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-iam',
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatTabsModule,
    MatInputModule,
    MatButtonModule,
    MatListModule,
    MatCardModule,
    MatSelectModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatSnackBarModule
  ],
  standalone: true,
  templateUrl: './iam.component.html',
  styleUrl: './iam.component.scss'
})
export class IAMComponent {

  // Data
  users: User[] = [];
  roles: Role[] = [];
  permissions: Permission[] = [];

  // Forms
  newRoleForm: FormGroup;
  newPermissionForm: FormGroup;
  assignPermissionsToRoleForm: FormGroup;
  assignRolesToUserForm: FormGroup;

  // Selected items for assignment
  selectedRoleForPermissions: Role | null = null;
  selectedUserForRoles: User | null = null;
  permissionsForSelectedRole: FormControl;
  rolesForSelectedUser: FormControl;

  constructor(
    private fb: FormBuilder,
    private snackBar: MatSnackBar
  ) {
    // Initialize forms
    this.newRoleForm = this.fb.group({
      name: ['', Validators.required]
    });

    this.newPermissionForm = this.fb.group({
      name: ['', Validators.required]
    });

    this.permissionsForSelectedRole = new FormControl([]);
    this.assignPermissionsToRoleForm = this.fb.group({
      roleId: ['', Validators.required],
      permissions: this.permissionsForSelectedRole
    });

    this.rolesForSelectedUser = new FormControl([]);
    this.assignRolesToUserForm = this.fb.group({
      userId: ['', Validators.required],
      roles: this.rolesForSelectedUser
    });
  }

  ngOnInit(): void {

    // Listen for changes in selected role for permissions
    this.assignPermissionsToRoleForm.get('roleId')?.valueChanges.subscribe(roleId => {
      this.selectedRoleForPermissions = this.roles.find(r => r.id === roleId) || null;
      if (this.selectedRoleForPermissions) {
        // Set the current permissions of the selected role
        const currentPermissionIds = this.selectedRoleForPermissions.permissions.map(p => p.id);
        this.permissionsForSelectedRole.setValue(currentPermissionIds);
      } else {
        this.permissionsForSelectedRole.setValue([]);
      }
    });

    // Listen for changes in selected user for roles
    this.assignRolesToUserForm.get('userId')?.valueChanges.subscribe(userId => {
      this.selectedUserForRoles = this.users.find(u => u.id === userId) || null;
      if (this.selectedUserForRoles) {
        // Set the current roles of the selected user
        const currentUserRoleIds = this.selectedUserForRoles.roles.map(r => r.id);
        this.rolesForSelectedUser.setValue(currentUserRoleIds);
      } else {
        this.rolesForSelectedUser.setValue([]);
      }
    });
  }

  // Role & Permission Management
  onCreateRole(): void {
    if (this.newRoleForm.valid) {
      const roleName = this.newRoleForm.value.name;
    }
    console.info('Role created:', this.newRoleForm.value);
    this.snackBar.open('Role created successfully!', 'Close', { duration: 3000 });
  }

  onCreatePermission(): void {
    if (this.newPermissionForm.valid) {
      const permissionName = this.newPermissionForm.value.name;
    }

    console.info('Permission created:', this.newPermissionForm.value);
    this.snackBar.open('Permission created successfully!', 'Close', { duration: 3000 });
  }

  onUpdateRolePermissions(): void {
    if (this.assignPermissionsToRoleForm.valid) {
      const roleId = this.assignPermissionsToRoleForm.value.roleId;
      const selectedPermissionIds = this.assignPermissionsToRoleForm.value.permissions;
      console.info('Permissions updated for role:', roleId, selectedPermissionIds);
    }

    this.snackBar.open('Permissions updated successfully!', 'Close', { duration: 3000 });
  }

  // User Management
  onUpdateUserRoles(): void {
    if (this.assignRolesToUserForm.valid) {
      const userId = this.assignRolesToUserForm.value.userId;
      const selectedRoleIds = this.assignRolesToUserForm.value.roles;
    }
  }

  // Helper to display role permissions
  getRolePermissionsNames(role: Role): string {
    return role.permissions.map(p => p.name).join(', ');
  }

  // Helper to display user roles
  getUserRolesNames(user: User): string {
    return user.roles.map(r => r.name).join(', ');
  }
}
