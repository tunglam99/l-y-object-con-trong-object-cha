import { Component, OnInit, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    const lst = [
      {
        index: 0,
        classGroupName: '1',
        classGroupDetails: [
          {
            studentId: '39fc9620-8aaf-672d-916b-4c150ba00cd9',
            studentCode: '01',
            fullName: 'Đặng Minh Hằng',
            position: 'fffff',
            description: 'ggg',
          },
          {
            studentId: '39fc99b8-4540-3928-8eeb-c68f34e040e6',
            studentCode: '01',
            fullName: 'Ngọc Khánh Băng',
            position: 'okasdasdas',
            description: 'ajas',
          },
        ],
      },
      {
        index: 1,
        classGroupName: '2',
        classGroupDetails: [
          {
            studentId: '39fc9637-e5b2-d77b-56b5-27429b1e19ca',
            studentCode: '01',
            fullName: 'Huỳnh Hữu Chí',
            position: 'fffff',
            description: 'ggg',
          },
        ],
      },
    ];
    const lst2 = lst.map((x) => ({ x }));
    console.log(lst2);
  }

  lst2 = [
    {
      studentId: '39fc9637-e5b2-d77b-56b5-27429b1e19ca',
      studentCode: '01',
      fullName: 'Huỳnh Hữu Chí',
      position: 'fffff',
      description: 'ggg',
    },
    {
      studentId: '39fc9637-e5b2-d77b-56b5-27429b1e19ca',
      studentCode: '01',
      fullName: 'Huỳnh Hữu Chí',
      position: 'fffff',
      description: 'ggg',
    },
    {
      studentId: '39fc9637-e5b2-d77b-56b5-27429b1e19ca',
      studentCode: '01',
      fullName: 'Huỳnh Hữu Chí',
      position: 'fffff',
      description: 'ggg',
    },
  ];
  name = 'Angular ' + VERSION.major;
}
