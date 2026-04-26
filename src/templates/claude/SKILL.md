# Laravel Wayfinder Usage Rules

This project uses **Laravel Wayfinder** for type-safe route helpers.

## ❌ Never use Ziggy

Do NOT use:

- route()
- Ziggy
- route('name')

They are not available.

---

## ✅ Always use Wayfinder

Routes are generated under:

resources/js/routes/

Each route is a function with helpers:

- .url()
- .get()
- .post()
- .form()

---

## Usage

### Link

```tsx
<Link href={index()} />
<Link href={edit(model)} />
```

### Forms
```tsx
post(store.url())
put(update.url(model))
```

### Router
```tsx
router.delete(destroy.url(model))
```

### Parameters
```tsx
edit(model)
edit(model.id)
edit({ id: 1 })
```

## Rule
If you ever think about using route(), you are wrong.
Use Wayfinder imports instead.
