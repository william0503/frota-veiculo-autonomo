/**
 * @swagger
 * components:
 *  schemas:
 *      Logon:
 *        type: object
 *        properties:
 *          user:
 *              $ref: '#/components/schemas/User'
 *          ride:
 *             $ref: '#/components/schemas/Ride'
 */
function Logon(user, ride) {
    this.user = user;
    this.ride = ride;
  }

  
module.exports = Logon;