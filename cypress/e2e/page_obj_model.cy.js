import {LoginPage} from "./pages/login_page"

const loginpg= new LoginPage()

    it('page object model',()=>{
       cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        loginpg.entername('Admin');
        loginpg.enterpass('admin123');
        loginpg.clicklogin();

    });
