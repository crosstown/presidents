import {Component, OnInit} from '@angular/core';
import {IPresident} from '../ipresident';
import {Service} from '../service.service';

@Component({
  selector: 'app-presidents-list',
  templateUrl: './presidents-list.component.html',
  styleUrls: ['./presidents-list.component.css']
})
export class PresidentsListComponent implements OnInit {


  // tslint:disable-next-line:variable-name
  _listFilter: string;

  get listFilter(): string {
    return this._listFilter;
  }

  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredPresidents = this.listFilter ? this.performFilter(this.listFilter) : this.presidents;
  }

  presidents: IPresident[];
  constructor(private presidentService: Service) {
  }
  pageTitle = 'Pesident\'s list';
  imageWidth = 50;
  imageMargin = 2;
  showImage = false;

  filteredPresidents: IPresident[] = [];

  ngOnInit(): void {
    this.presidents = this.presidentService.getPresidents();
    this.filteredPresidents = this.presidents;

  }

  performFilter(filterBy: string): IPresident[]{
    filterBy = filterBy.toLocaleLowerCase();
    return this.presidents.filter((president: IPresident) =>
    president.presidentName.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }


}
