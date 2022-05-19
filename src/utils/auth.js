import { RoleEnum } from '@/utils/const'

export function getUserInfo() {
  return {
    username: 'gqs',
    userType: 2
  }
}

export function checkAuthorization(roles, userType) {
  return roles.some(role => RoleEnum[role] === userType)
}
