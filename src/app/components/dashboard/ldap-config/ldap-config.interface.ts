export interface LdapConfigData {
  _id: string;
  ldapName: string;
  hosts: string;
  picture: string;
  authStatus: string;
  authorizationInfo: {
    user: string;
    password: string;
  };
}
