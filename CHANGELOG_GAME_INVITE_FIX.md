# Лог изменений: Исправление перехода по уведомлениям о приглашении в игру

**Дата:** 27 июня 2025  
**Цель:** Исправить переход по уведомлениям о приглашении в игру, чтобы показывался `friendGameAcceptModal` вместо `preGameModal`

## Внесенные изменения

### 1. Файл: `/frontend/src/elements/navigation/navigation.ts`

**Изменено:** Обработчик клика на уведомления о приглашении в игру

**До:**
```typescript
export const attachNotificationListeners = () => {
  document.querySelectorAll(".notificationBlock")?.forEach((el) => {
    el.addEventListener("click", () => {
      if(el.getAttribute("notType") === "game_invite"){
      navigateTo(`/game`);
      // const preGameModal = document.querySelector("#preGameModal");
      //                 const friendGameAcceptModal = document.querySelector("#friendGameAcceptModal");
      //           preGameModal?.classList.add("hidden");
      //           preGameModal?.classList.remove("flex");
      //           friendGameAcceptModal?.classList.remove("hidden");
    }else{
      const userId = el.getAttribute("data-user-id");
      navigateTo(`/profile/${userId}`);
    }
    });
  });
```

**После:**
```typescript
export const attachNotificationListeners = () => {
  document.querySelectorAll(".notificationBlock")?.forEach((el) => {
    el.addEventListener("click", () => {
      if(el.getAttribute("notType") === "game_invite"){
        const gameId = el.getAttribute("data-game-id");
        // Сохраняем информацию о том, что это переход по приглашению
        localStorage.setItem('gameInviteAction', JSON.stringify({
          gameId: gameId,
          action: 'show_accept_modal'
        }));
        navigateTo(`/game`);
      }else{
        const userId = el.getAttribute("data-user-id");
        navigateTo(`/profile/${userId}`);
      }
    });
  });
```

**Изменения:**
- Добавлено получение `gameId` из атрибута `data-game-id`
- Добавлено сохранение информации о приглашении в `localStorage` перед переходом
- Убраны закомментированные строки

---

### 2. Файл: `/frontend/src/pages/game/game.ts`

**Изменено:** Добавлена проверка localStorage в начале функции `handleGame`

**До:**
```typescript
export function handleGame(mainWrapper: HTMLDivElement | undefined) {
    const tournamentProfiles = document.querySelector("#tournamentProfiles");
    tournamentProfiles?.classList.add("hidden")
    const scoreInfo = document.querySelector("#score-info");
    const gameBoard = document.getElementById("game-board") as HTMLCanvasElement;
    let currentReadyButtonHandler: ((e: Event) => void) | null = null;
    let rankedProfilesContainer = document.querySelector('#rankedProfiles');
    const btmBtn = document.querySelector("#backToMenuBtn");
    const spinerDiv = document.querySelector("#spinerDiv");
    
    // Игровые переменные для режимов
    let gameMode: 'local' | 'multiplayer' | null = null;
    let gameType: 'ranked' | 'friends' | null = null;
```

**После:**
```typescript
export function handleGame(mainWrapper: HTMLDivElement | undefined) {
    // Проверяем, есть ли сохраненное действие для игрового приглашения
    const gameInviteAction = localStorage.getItem('gameInviteAction');
    if (gameInviteAction) {
        try {
            const action = JSON.parse(gameInviteAction);
            if (action.action === 'show_accept_modal') {
                // Очищаем сохраненное действие
                localStorage.removeItem('gameInviteAction');
                
                // Показываем модальное окно принятия приглашения через небольшую задержку
                setTimeout(() => {
                    const preGameModal = document.querySelector("#preGameModal");
                    const friendGameAcceptModal = document.querySelector("#friendGameAcceptModal");
                    
                    preGameModal?.classList.add("hidden");
                    preGameModal?.classList.remove("flex");
                    friendGameAcceptModal?.classList.remove("hidden");
                    friendGameAcceptModal?.classList.add("flex");
                }, 100);
            }
        } catch (e) {
            console.error('Error parsing game invite action:', e);
            localStorage.removeItem('gameInviteAction');
        }
    }

    const tournamentProfiles = document.querySelector("#tournamentProfiles");
    tournamentProfiles?.classList.add("hidden")
    const scoreInfo = document.querySelector("#score-info");
    const gameBoard = document.getElementById("game-board") as HTMLCanvasElement;
    let currentReadyButtonHandler: ((e: Event) => void) | null = null;
    let rankedProfilesContainer = document.querySelector('#rankedProfiles');
    const btmBtn = document.querySelector("#backToMenuBtn");
    const spinerDiv = document.querySelector("#spinerDiv");
    
    // Игровые переменные для режимов
    let gameMode: 'local' | 'multiplayer' | null = null;
    let gameType: 'ranked' | 'friends' | null = null;
```

**Изменения:**
- Добавлена проверка `localStorage` на наличие `gameInviteAction`
- Добавлена логика для показа `friendGameAcceptModal` и скрытия `preGameModal`
- Добавлена обработка ошибок при парсинге JSON
- Добавлен `setTimeout` с задержкой 100мс для корректной работы с DOM

---

### 3. Файл: `/frontend/src/elements/navigation/createNavigation.ts`

**Изменено:** Добавлен атрибут `data-game-id` в уведомления о приглашении в игру

**До:**
```typescript
        <div data-user-id="${n.sender.id} "notType="game_invite"
```

**После:**
```typescript
        <div data-user-id="${n.sender.id}" data-game-id="${n.id}" notType="game_invite"
```

**Изменения:**
- Добавлен атрибут `data-game-id="${n.id}"` для передачи ID уведомления
- Исправлена лишняя кавычка в `data-user-id`

---

## Как откатить изменения

### 1. Откатить `/frontend/src/elements/navigation/navigation.ts`:

```typescript
// Заменить блок в функции attachNotificationListeners:
if(el.getAttribute("notType") === "game_invite"){
  const gameId = el.getAttribute("data-game-id");
  // Сохраняем информацию о том, что это переход по приглашению
  localStorage.setItem('gameInviteAction', JSON.stringify({
    gameId: gameId,
    action: 'show_accept_modal'
  }));
  navigateTo(`/game`);
}

// НА:
if(el.getAttribute("notType") === "game_invite"){
  navigateTo(`/game`);
  // const preGameModal = document.querySelector("#preGameModal");
  //                 const friendGameAcceptModal = document.querySelector("#friendGameAcceptModal");
  //           preGameModal?.classList.add("hidden");
  //           preGameModal?.classList.remove("flex");
  //           friendGameAcceptModal?.classList.remove("hidden");
}
```

### 2. Откатить `/frontend/src/pages/game/game.ts`:

```typescript
// Удалить весь блок проверки localStorage из начала функции handleGame:
// Проверяем, есть ли сохраненное действие для игрового приглашения
const gameInviteAction = localStorage.getItem('gameInviteAction');
if (gameInviteAction) {
    try {
        const action = JSON.parse(gameInviteAction);
        if (action.action === 'show_accept_modal') {
            // Очищаем сохраненное действие
            localStorage.removeItem('gameInviteAction');
            
            // Показываем модальное окно принятия приглашения через небольшую задержку
            setTimeout(() => {
                const preGameModal = document.querySelector("#preGameModal");
                const friendGameAcceptModal = document.querySelector("#friendGameAcceptModal");
                
                preGameModal?.classList.add("hidden");
                preGameModal?.classList.remove("flex");
                friendGameAcceptModal?.classList.remove("hidden");
                friendGameAcceptModal?.classList.add("flex");
            }, 100);
        }
    } catch (e) {
        console.error('Error parsing game invite action:', e);
        localStorage.removeItem('gameInviteAction');
    }
}
```

### 3. Откатить `/frontend/src/elements/navigation/createNavigation.ts`:

```typescript
// Заменить:
<div data-user-id="${n.sender.id}" data-game-id="${n.id}" notType="game_invite"

// НА:
<div data-user-id="${n.sender.id} "notType="game_invite"
```

---

## Принцип работы решения

1. **Клик по уведомлению:** Сохраняем информацию о приглашении в `localStorage` и переходим на `/game`
2. **Загрузка страницы игры:** Проверяем `localStorage`, если есть информация о приглашении:
   - Скрываем `preGameModal`
   - Показываем `friendGameAcceptModal`
   - Очищаем `localStorage`
3. **Передача данных:** Используем ID уведомления как game-id через атрибут `data-game-id`

## Преимущества решения

- ✅ Работает без изменения роутинга
- ✅ Не требует изменения серверной части
- ✅ Простой откат изменений
- ✅ Использует стандартные веб-технологии (localStorage)
- ✅ Обработка ошибок включена
