# 02 – Arkitekturmønstre

Et overblik over de mest brugte mønstre.

## Lagdelt arkitektur

```
Præsentation  →  Forretningslogik  →  Dataadgang  →  Database
```

## Mikrotjenester

Små, selvstændigt deploybare services, der kommunikerer over netværket.

```java
@RestController
public class OrderController {
    @GetMapping("/orders/{id}")
    public Order get(@PathVariable long id) {
        return service.find(id);
    }
}
```

## Opgave

Sammenlign en monolit og en mikrotjeneste-arkitektur for en webshop. Lav en tabel med fordele og ulemper.
