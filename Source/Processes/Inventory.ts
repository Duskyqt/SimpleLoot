// Content // 

export namespace Inventory {

    export function BagSlotsAvailable(): number {
        let Count = 0;
        for (let i = 0; i < 5; i++) {
            const NumSlots = GetContainerNumFreeSlots(i)[0];
            if (NumSlots > 0) {
                Count = Count + NumSlots;
            }
        }
        return Count;
    }
}
