// Content //

export namespace Units {

    export function GetUnits(radius: number, validCheck?: Function, typeOne?: number, typeTwo?: number, typeThree?: number): string[] {
        const Units: string[] = [];

        const Objects = Lb.GetObjects(radius, typeOne, typeTwo, typeThree);
        if (Objects.length > 0) {
            for (let i = 0; i < Objects.length; i++) {
                const ThisUnit = Objects[i];
                if (validCheck) {
                    if (validCheck(ThisUnit)) {
                        Units.push(ThisUnit);
                    }
                } else {
                    Units.push(ThisUnit);
                }
            }
        }
        return Units;
    }
}
