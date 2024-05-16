import { Observable, Observer, of, map, filter, Subscription } from "rxjs"

const numbers: number[] = []

const obsOfNumbers: Observable<number[]> = of(numbers)

const observerOfStrings: Observer<string[]> = {
    next: (data) => {
        console.log(data)
    },
    error: (err) => { console.log(err) },
    complete: () => { }
}

const sub: Subscription = obsOfNumbers
    .pipe(
        map(
            (storedRes) => {
                return storedRes.map(
                    (element) => `${element * 5}`
                )
            }
        )
    )
    .subscribe(observerOfStrings)

sub?.unsubscribe()