// Content //

export namespace Movement {
    export let LastMoveCheck = 0;
    export function MoveTo(unit: string) {
        if (GetTime() > LastMoveCheck) {
            const [uX, uY, uZ] = Lb.ObjectPosition(unit);
            if (Lb.NavMgr_IsPositionOnMesh(uX, uY, uZ)) {
                Lb.Navigator.MoveTo(uX, uY, uZ, 1, 2);
            } else {
                Lb.MoveTo(uX, uY, uZ);
            }
            LastMoveCheck = GetTime() + 0.2;
        }
    }


}