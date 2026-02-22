from datetime import date

def get_weekday(day, month, year):
    days = [
        "Понедельник", "Вторник", "Среда",
        "Четверг", "Пятница", "Суббота", "Воскресенье"
    ]
    return days[date(year, month, day).weekday()]


def is_leap_year(year):
    return year % 400 == 0 or (year % 4 == 0 and year % 100 != 0)


def calculate_age(day, month, year):
    today = date.today()
    age = today.year - year
    if (today.month, today.day) < (month, day):
        age -= 1
    return age


def print_star_date(day, month, year):
    digits = {
        "0": ["***", "* *", "* *", "* *", "***"],
        "1": ["  *", " **", "  *", "  *", "***"],
        "2": ["***", "  *", "***", "*  ", "***"],
        "3": ["***", "  *", "***", "  *", "***"],
        "4": ["* *", "* *", "***", "  *", "  *"],
        "5": ["***", "*  ", "***", "  *", "***"],
        "6": ["***", "*  ", "***", "* *", "***"],
        "7": ["***", "  *", "  *", "  *", "  *"],
        "8": ["***", "* *", "***", "* *", "***"],
        "9": ["***", "* *", "***", "  *", "***"],
        ".": ["   ", "   ", "   ", "   ", "   "]
    }

    date_str = f"{day:02d}.{month:02d}.{year}"
    for row in range(5):
        for ch in date_str:
            print(digits[ch][row], end="  ")
        print()


day = int(input("Введите день рождения: "))
month = int(input("Введите месяц рождения: "))
year = int(input("Введите год рождения: "))

print("\n📅 День недели:", get_weekday(day, month, year))
print("🌀 Високосный год:", "Да" if is_leap_year(year) else "Нет")
print("🎂 Возраст:", calculate_age(day, month, year), "лет")

print("\n📟 Дата рождения (звёздочками):")
print_star_date(day, month, year)