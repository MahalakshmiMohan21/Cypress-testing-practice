export class LoginPage{
    entername(username){
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type(username);
    }
    enterpass(password){
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type(password);
    }
    clicklogin(){
        cy.get('.oxd-button').click();
    }
}

        
       