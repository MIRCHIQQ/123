"use client";

import { useState } from "react";
import { toast } from "sonner";
import { CalendarCheck, Send } from "lucide-react";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";

const services = [
  "Консультации специалистов",
  "Диагностика",
  "Лабораторные анализы",
  "Процедурный кабинет",
  "Физиотерапия и реабилитация",
];

const bookingSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Укажите имя (минимум 2 символа)")
    .max(80, "Имя слишком длинное"),
  phone: z
    .string()
    .trim()
    .regex(/^[+]?[\d\s()-]{10,18}$/, "Укажите корректный номер телефона"),
  service: z.string().min(1, "Выберите направление"),
  comment: z.string().trim().max(600, "Комментарий слишком длинный").optional(),
});

type BookingFormValues = z.infer<typeof bookingSchema>;

export function BookingForm() {
  const [values, setValues] = useState<BookingFormValues>({
    name: "",
    phone: "",
    service: "",
    comment: "",
  });
  const [errors, setErrors] = useState<Record<string, string | undefined>>({});
  const [submitted, setSubmitted] = useState(false);

  const updateField = (field: keyof BookingFormValues, value: string) => {
    setValues((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const result = bookingSchema.safeParse(values);
    if (!result.success) {
      const fieldErrors = result.error.flatten().fieldErrors;
      setErrors({
        name: fieldErrors.name?.[0],
        phone: fieldErrors.phone?.[0],
        service: fieldErrors.service?.[0],
        comment: fieldErrors.comment?.[0],
      });
      toast.error("Проверьте правильность заполнения формы");
      return;
    }

    setSubmitted(true);
    toast.success("Заявка успешно отправлена!");
  };

  if (submitted) {
    return (
      <Card className="card-hover mx-auto w-full max-w-md animate-in fade-in slide-in-from-bottom-4 duration-500">
        <CardContent className="flex flex-col items-center gap-3 py-12 text-center">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
            <CalendarCheck className="h-7 w-7 text-primary" />
          </div>
          <CardTitle>Заявка принята</CardTitle>
          <CardDescription className="max-w-sm">
            Спасибо, {values.name}! Мы получили вашу заявку на приём. Наш
            администратор свяжется с вами по указанному телефону для
            подтверждения времени визита.
          </CardDescription>
          <Button
            variant="outline"
            className="mt-2"
            onClick={() => {
              setValues({ name: "", phone: "", service: "", comment: "" });
              setSubmitted(false);
            }}
          >
            Оставить ещё одну заявку
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="card-hover mx-auto w-full max-w-md">
      <CardHeader>
        <CardTitle>Запись на приём</CardTitle>
        <CardDescription>
          Заполните форму, и администратор центра свяжется с вами для
          подтверждения записи.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form
          onSubmit={handleSubmit}
          noValidate
          className="flex flex-col gap-5"
        >
          <FieldGroup>
            <Field data-invalid={!!errors.name}>
              <FieldLabel htmlFor="booking-name">Ваше имя</FieldLabel>
              <Input
                id="booking-name"
                name="name"
                placeholder="Иванов Иван"
                value={values.name}
                aria-invalid={!!errors.name}
                onChange={(event) => updateField("name", event.target.value)}
              />
              {errors.name && <FieldError>{errors.name}</FieldError>}
            </Field>

            <Field data-invalid={!!errors.phone}>
              <FieldLabel htmlFor="booking-phone">Телефон</FieldLabel>
              <Input
                id="booking-phone"
                name="phone"
                type="tel"
                placeholder="+7 (900) 123-45-67"
                value={values.phone}
                aria-invalid={!!errors.phone}
                onChange={(event) => updateField("phone", event.target.value)}
              />
              {errors.phone && <FieldError>{errors.phone}</FieldError>}
            </Field>

            <Field data-invalid={!!errors.service}>
              <FieldLabel>Направление</FieldLabel>
              <Select
                value={values.service || undefined}
                onValueChange={(value) => updateField("service", value ?? "")}
              >
                <SelectTrigger
                  aria-invalid={!!errors.service}
                  className="w-full"
                >
                  <SelectValue placeholder="Выберите направление" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    {services.map((service) => (
                      <SelectItem key={service} value={service}>
                        {service}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
              {errors.service && <FieldError>{errors.service}</FieldError>}
            </Field>

            <Field>
              <FieldLabel htmlFor="booking-comment">
                Комментарий (необязательно)
              </FieldLabel>
              <Textarea
                id="booking-comment"
                name="comment"
                placeholder="Удобное время, вопросы к специалисту…"
                rows={3}
                value={values.comment}
                onChange={(event) => updateField("comment", event.target.value)}
              />
              {errors.comment && <FieldError>{errors.comment}</FieldError>}
            </Field>
          </FieldGroup>

          <Button type="submit" size="lg" className="w-full">
            <Send data-icon="inline-end" />
            Отправить заявку
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
