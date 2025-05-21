import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private renderer: Renderer2;
  private themeKey = 'user-theme';
  private darkClass = 'dark-mode';
  private lightClass = 'light-mode';

  constructor(private rendererFactory: RendererFactory2) {
    this.renderer = this.rendererFactory.createRenderer(null, null);
    this.initTheme();
  }

  initTheme() {
    const savedTheme = localStorage.getItem(this.themeKey);
    if (savedTheme === this.darkClass) {
      this.enableDark();
    } else {
      this.enableLight();
    }
  }

  enableDark() {
    this.renderer.removeClass(document.body, this.lightClass);
    this.renderer.addClass(document.body, this.darkClass);
    localStorage.setItem(this.themeKey, this.darkClass);
  }

  enableLight() {
    this.renderer.removeClass(document.body, this.darkClass);
    this.renderer.addClass(document.body, this.lightClass);
    localStorage.setItem(this.themeKey, this.lightClass);
  }

  toggleTheme() {
    const isDark = document.body.classList.contains(this.darkClass);
    isDark ? this.enableLight() : this.enableDark();
  }

  isDarkMode(): boolean {
    return document.body.classList.contains(this.darkClass);
  }
}
