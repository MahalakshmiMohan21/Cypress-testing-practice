import {LoginPage} from "./pages/login_page"

const loginpg= new LoginPage()

describe('all tests',()=>{
    beforeEach(()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    })
    it('page object model',()=>{
       
        loginpg.entername('Admin');
        loginpg.enterpass('admin123');
        loginpg.clicklogin();

    });
    it.skip('page object model',()=>{
       
        loginpg.entername('Admin');
        loginpg.enterpass('admin123');
        loginpg.clicklogin();

    });

    it('invalid username',()=>{
       
        loginpg.entername('Admin123');
        loginpg.enterpass('admin123');
        loginpg.clicklogin();

    });
})
    