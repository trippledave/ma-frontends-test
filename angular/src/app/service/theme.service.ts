import { Injectable } from "@angular/core";


@Injectable()
export class ThemeService {

    // TODO https://stackblitz.com/edit/angular-3ph3on

    changeTheme(color) {
        if (color === "blue") {
            document.documentElement.style.setProperty('--primary', "blue");
            document.documentElement.style.setProperty('--accent', "red");
        } else {
            document.documentElement.style.setProperty('--primary', "#FFBF00");
            document.documentElement.style.setProperty('--accent', "black");
        }
    }
}