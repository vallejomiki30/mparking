import Image from "next/image";
import ParkingLayout from "./components/landing/parkingLayout";

export default function Home() {
  return (
    <main className="flex min-h-screen">
      <ParkingLayout></ParkingLayout>
    </main>
  );
}
