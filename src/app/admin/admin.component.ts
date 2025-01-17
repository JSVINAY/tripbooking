import { Component } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent {
  packages = [
    { id: 1, name: 'Beach Paradise', price: 5000, duration: 5 },
    { id: 2, name: 'Mountain Retreat', price: 7000, duration: 7 },
    { id: 3, name: 'City Explorer', price: 3000, duration: 3 },
  ];

  selectedPackage: any = null; // For viewing or editing a specific package
  newPackage = { id: 0, name: '', price: 0, duration: 0 }; // For creating a package

  // Get all packages
  getAllPackages() {
    return this.packages;
  }

  // Get package by ID
  getPackageById(id: number) {
    this.selectedPackage = this.packages.find((pkg) => pkg.id === id);
  }

  // Create a new package
  createPackage() {
    const newId = Math.max(...this.packages.map((pkg) => pkg.id)) + 1;
    const newPkg = { ...this.newPackage, id: newId };
    this.packages.push(newPkg);
    this.newPackage = { id: 0, name: '', price: 0, duration: 0 }; // Reset form
  }

  // Update an existing package
  updatePackage() {
    const index = this.packages.findIndex((pkg) => pkg.id === this.selectedPackage.id);
    if (index !== -1) {
      this.packages[index] = { ...this.selectedPackage };
      this.selectedPackage = null; // Reset selected package
    }
  }

  // Delete a package
  deletePackage(id: number) {
    this.packages = this.packages.filter((pkg) => pkg.id !== id);
  }

  // Select a package for editing
  editPackage(pkg: any) {
    this.selectedPackage = { ...pkg };
  }
}
