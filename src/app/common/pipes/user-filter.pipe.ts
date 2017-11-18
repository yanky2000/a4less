import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'userFilter'
})
export class UserFilterPipe implements PipeTransform {

  public transform(users: User[], searchTerm: string): User[] {
    if (!searchTerm) {
      return users;
    }
    return users
      .filter((user: User) => (`${user.first_name} ${user.last_name}`)
      .includes(searchTerm));
  }

}
