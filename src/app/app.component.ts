import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  items: MenuItem[] | undefined;
  title = 'finvue';
  ngOnInit() {
    this.items = [
      { label: 'Home', icon: 'pi pi-fw pi-home', url: '/' },
      { label: 'Features', icon: 'pi pi-fw pi-list', url: '#features' },
      { label: 'Contact', icon: 'pi pi-fw pi-envelope', url: '/contact' },
    ];
  }
  features = [
    {
      icon: 'pi pi-chart-bar',
      title: 'Dynamic Visualization',
      description: 'Visualize your finances in dynamic charts.',
    },
    {
      icon: 'pi pi-dollar',
      title: 'Smart Investments',
      description: 'Get insights for smart investment decisions.',
    },
    // ... more features
  ];
}
