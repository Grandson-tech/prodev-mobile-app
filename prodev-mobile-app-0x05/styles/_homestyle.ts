import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  searchGroup: {
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  searchFormGroup: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  searchControlGroup: {
    flex: 1,
  },
  searchFormText: {
    fontSize: 16,
    color: "#666",
  },
  searchControl: {
    fontSize: 16,
    color: "#333",
    paddingVertical: 5,
  },
  searchButton: {
    backgroundColor: "#34967C",
    borderRadius: 8,
    padding: 10,
    marginLeft: 10,
  },
  filterGroup: {
    flexDirection: "row",
    paddingHorizontal: 20,
    gap: 15,
  },
  filterContainer: {
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: "#f8f8f8",
    borderRadius: 20,
    minWidth: 80,
  },
  listingContainer: {
    flex: 1,
    paddingHorizontal: 20,
  },
  paginationContainer: {
    alignItems: "center",
    paddingVertical: 20,
  },
  showMoreButton: {
    backgroundColor: "#34967C",
    paddingHorizontal: 30,
    paddingVertical: 12,
    borderRadius: 25,
  },
  showMoreButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "500",
  },
});

export { styles };
