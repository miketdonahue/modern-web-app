/**
 * New user welcome email options
 */
export const WELCOME_EMAIL = {
  from: 'no-reply@mail.com',
  subject: 'Welcome!',
  template: 'welcome',
  substitutionData: (actor: any) => ({
    firstName: actor.first_name,
    signInUrl: 'http://localhost:8080/app/login',
  }),
};

/**
 * Confirmation email options
 */
export const CONFIRMATION_EMAIL = {
  from: 'no-reply@mail.com',
  subject: 'Confirm your email address',
  template: 'confirm-email-address',
  substitutionData: (actor: any) => ({
    firstName: actor.first_name,
    confirmedCode: actor.confirmed_code,
  }),
};

/**
 * Reset password email options
 */
export const RESET_PASSWORD_EMAIL = {
  from: 'no-reply@mail.com',
  subject: 'Reset your password',
  template: 'reset-password',
  substitutionData: (actor: any) => ({
    firstName: actor.first_name,
    resetPasswordCode: actor.reset_password_code,
    resetPasswordUrl: 'http://localhost:8080/app/reset-password',
  }),
};

/**
 * Unlock account email options
 */
export const UNLOCK_ACCOUNT_EMAIL = {
  from: 'no-reply@mail.com',
  subject: 'Unlock your account',
  template: 'unlock-account',
  substitutionData: (actor: any) => ({
    firstName: actor.first_name,
    lockedCode: actor.locked_code,
    resetPasswordUrl: 'http://localhost:8080/app/reset-password',
  }),
};
