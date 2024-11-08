export type RootStackParamList = {
  AllPlaces: undefined;
  AddPlace: undefined;
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
