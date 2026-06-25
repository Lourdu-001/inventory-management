export interface TimelineStep {
  text: string;
}

export const ProblemSteps: TimelineStep[] = [
  { text: "Sales rep enters 3 Packs of 6 for Store A" },
  { text: "Another rep enters 10 Each for Store B" },
  { text: "Warehouse reads the first line as 3 Each by mistake" },
  { text: "Pick list prints mixed units and no one notices" },
  { text: "Truck leaves short by 14 bottles" },
  { text: "Store A complains, Store B gets an odd credit" },
  { text: "Month end shows 2 cases on hand but the floor has only 1 case and 10 loose" }
];